'use client';

import React from 'react';
import { MapPinOff, AlertCircle, Phone, MessageCircle, RotateCcw } from 'lucide-react';
import { BUSINESS_PHONE, BUSINESS_PHONE_DISPLAY, WHATSAPP_URL } from '../lib/coverage';

/**
 * Inline result panel for the non-success availability states.
 * kind: 'unsupported' | 'error'
 */
const CoverageResult = ({ kind, postcode, onRetry, id }) => {
  const unsupported = kind === 'unsupported';

  return (
    <div
      id={id}
      role="alert"
      className={`rounded-2xl border-2 p-4 md:p-5 text-left ${
        unsupported ? 'bg-orange-50 border-[#FB7E10]/40' : 'bg-red-50 border-red-200'
      }`}
    >
      <div className="flex items-start gap-3">
        {unsupported ? (
          <MapPinOff className="h-6 w-6 text-[#FB7E10] shrink-0 mt-0.5" aria-hidden="true" />
        ) : (
          <AlertCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
        )}
        <div className="min-w-0">
          <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight">
            {unsupported
              ? "Sorry, we don't currently cover your area."
              : "We couldn't check availability right now."}
          </h3>
          <p className="mt-1 text-sm text-gray-600 font-medium leading-snug">
            {unsupported ? (
              <>
                We couldn&apos;t confirm mobile tyre fitting availability for{' '}
                <span className="font-bold text-gray-900">{postcode}</span>. Please check your
                postcode or contact our team to see whether we can help.
              </>
            ) : (
              <>
                Something went wrong while checking <span className="font-bold text-gray-900">{postcode}</span>.
                This doesn&apos;t mean you&apos;re outside our area &mdash; please try again or call us.
              </>
            )}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2.5">
        <a
          href={`tel:${BUSINESS_PHONE}`}
          className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap bg-[#FB7E10] hover:bg-orange-600 text-white h-12 px-5 rounded-full font-bold text-base shadow-md transition-all active:scale-[0.98]"
        >
          <Phone size={18} aria-hidden="true" />
          Call {BUSINESS_PHONE_DISPLAY}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap bg-[#22C55E] hover:bg-green-600 text-white h-12 px-5 rounded-full font-bold text-base shadow-md transition-all active:scale-[0.98]"
        >
          <MessageCircle size={18} aria-hidden="true" />
          Chat on WhatsApp
        </a>
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap bg-white border-2 border-gray-200 hover:border-[#FB7E10] text-gray-900 h-12 px-5 rounded-full font-bold text-base transition-all active:scale-[0.98]"
          >
            <RotateCcw size={16} aria-hidden="true" />
            {unsupported ? 'Try another postcode' : 'Try again'}
          </button>
        )}
      </div>
    </div>
  );
};

export default CoverageResult;
