'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { checkCoverage } from './coverage';

const TIMEOUT_MS = 8000;
const KNOWN = ['supported', 'unsupported', 'invalid', 'incomplete'];

const IDLE = { phase: 'idle', postcode: '', message: '' };

/**
 * Asks /api/availability whether a postcode is covered.
 * phase: idle | loading | supported | unsupported | invalid | incomplete | error
 * Format problems are caught locally (no request); coverage is always decided by the server.
 */
export function useAvailability() {
  const [state, setState] = useState(IDLE);
  const latest = useRef({ id: 0, controller: null });

  useEffect(() => () => latest.current.controller?.abort(), []);

  const reset = useCallback(() => {
    latest.current.id += 1;
    latest.current.controller?.abort();
    setState(IDLE);
  }, []);

  const check = useCallback(async (input) => {
    const local = checkCoverage(input);
    if (local.status === 'invalid' || local.status === 'incomplete') {
      latest.current.id += 1;
      latest.current.controller?.abort();
      setState({ phase: local.status, postcode: local.postcode, message: local.message });
      return local.status;
    }

    latest.current.controller?.abort();
    const id = ++latest.current.id;
    const controller = new AbortController();
    latest.current.controller = controller;
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    setState({ phase: 'loading', postcode: local.postcode, message: '' });

    const isCurrent = () => latest.current.id === id;
    try {
      const res = await fetch(`/api/availability?postcode=${encodeURIComponent(local.postcode)}`, {
        signal: controller.signal,
        cache: 'no-store',
      });
      let body = null;
      try {
        body = await res.json();
      } catch {
        // handled below as an unexpected response
      }
      if (!isCurrent()) return null;

      if (!body || !KNOWN.includes(body.status) || (!res.ok && body.status !== 'invalid')) {
        console.error('[availability] Unexpected response', res.status, body);
        setState({ phase: 'error', postcode: local.postcode, message: '' });
        return 'error';
      }
      setState({ phase: body.status, postcode: local.postcode, message: body.message || '' });
      return body.status;
    } catch (err) {
      if (!isCurrent()) return null;
      console.error('[availability] Check failed', err);
      setState({ phase: 'error', postcode: local.postcode, message: '' });
      return 'error';
    } finally {
      clearTimeout(timer);
    }
  }, []);

  return { state, check, reset };
}
