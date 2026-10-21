import { locations } from '../data/locations.js';

/**
 * Service-coverage rules.
 *
 * Source of truth: src/data/locations.js (the same list that powers the
 * /locations directory). A postcode is covered when its outward code
 * (e.g. "GU11" in "GU11 3HY") matches an "Operational" entry. A syntactically
 * valid postcode that is not in the list is NOT covered.
 */

export const BUSINESS_PHONE = '02071013856';
export const BUSINESS_PHONE_DISPLAY = '020 7101 3856';
export const WHATSAPP_URL = 'https://wa.me/447494024653';

const COVERED_OUTWARD_CODES = new Set(
  locations
    .filter((l) => l.status === 'Operational')
    .map((l) => l.postcode.replace(/\s+/g, '').toUpperCase())
);

const OUTWARD_RE = /^[A-Z]{1,2}\d[A-Z\d]?$/;
const INWARD_RE = /^\d[A-Z]{2}$/;

export const normalizePostcode = (value) =>
  typeof value === 'string' ? value.trim().replace(/\s+/g, ' ').toUpperCase() : '';

/**
 * Decide coverage for user input.
 * @returns {{status: 'supported'|'unsupported'|'invalid'|'incomplete', postcode: string, outward?: string, message?: string}}
 *   `postcode` is the normalised input.
 */
export const checkCoverage = (input) => {
  const postcode = normalizePostcode(input);
  if (!postcode) {
    return { status: 'invalid', postcode, message: 'Please enter a postcode' };
  }
  if (postcode.length > 8 || !/^[A-Z0-9 ]+$/.test(postcode)) {
    return { status: 'invalid', postcode, message: 'Please enter a valid UK postcode (e.g. GU11 3HY)' };
  }

  const compact = postcode.replace(/ /g, '');

  // Full postcode: outward + inward (last 3 characters)
  let outward = compact;
  const inward = compact.slice(-3);
  if (compact.length >= 5 && INWARD_RE.test(inward) && OUTWARD_RE.test(compact.slice(0, -3))) {
    outward = compact.slice(0, -3);
  } else if (!OUTWARD_RE.test(compact)) {
    // Could become a valid postcode with more input (e.g. "GU", "GU11 3")
    if (/^[A-Z]{1,2}$/.test(compact) || /^[A-Z]{1,2}\d[A-Z\d]?\d[A-Z]?$/.test(compact)) {
      return {
        status: 'incomplete',
        postcode,
        message: 'Please enter your full postcode (e.g. GU11 3HY) so we can confirm coverage',
      };
    }
    return { status: 'invalid', postcode, message: 'Please enter a valid UK postcode (e.g. GU11 3HY)' };
  }

  return COVERED_OUTWARD_CODES.has(outward)
    ? { status: 'supported', postcode, outward }
    : { status: 'unsupported', postcode, outward };
};
