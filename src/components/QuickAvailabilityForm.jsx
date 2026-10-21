'use client';

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Loader } from 'lucide-react';
import { useAvailability } from '../lib/useAvailability';
import CoverageResult from './CoverageResult';

const QuickAvailabilityForm = () => {
  const [postcode, setPostcode] = useState('');
  const router = useRouter();
  const inputRef = useRef(null);
  const { state, check, reset } = useAvailability();

  const loading = state.phase === 'loading';
  const formatError = state.phase === 'invalid' || state.phase === 'incomplete' ? state.message : '';
  const showResult = state.phase === 'unsupported' || state.phase === 'error';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const outcome = await check(postcode);
    if (outcome === 'supported') {
      // Only covered locations enter the booking flow
      router.push(`/booking?postcode=${encodeURIComponent(postcode.trim().toUpperCase())}`);
    }
  };

  const handleRetry = () => {
    if (state.phase === 'error') {
      // Temporary failure: re-run the same check
      handleSubmit({ preventDefault: () => {} });
      return;
    }
    reset();
    inputRef.current?.focus();
    inputRef.current?.select();
  };

  return (
    <div className="relative pt-2 md:pt-4">
      {/* Step Indicators */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center -mt-8 md:-mt-6 px-4">
        <div className="flex-1 border-t-2 border-dashed border-gray-200 mx-2"></div>
      </div>

      <div className="text-center mb-4 md:mb-8">
        <h2 className="text-lg md:text-3xl font-bold text-gray-900 mb-1 leading-tight tracking-tight">
          Find A Mobile <br className="md:hidden" /> Tyre Fitter Near You
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={postcode}
            autoComplete="postal-code"
            aria-label="Postcode"
            aria-invalid={formatError ? 'true' : undefined}
            aria-describedby={formatError ? 'postcode-error' : showResult ? 'postcode-result' : undefined}
            onChange={(e) => {
              setPostcode(e.target.value);
              if (state.phase !== 'idle' && state.phase !== 'loading') reset();
            }}
            placeholder="Enter postcode (e.g. GU11 or KT1)"
            className={`w-full pl-12 pr-4 py-4 bg-white border-2 ${formatError ? 'border-red-500' : 'border-gray-200'} rounded-2xl focus:border-yellow-400 focus:ring-0 transition-all font-semibold text-lg placeholder:text-gray-400 shadow-sm`}
          />
        </div>

        {formatError && (
          <p id="postcode-error" role="alert" className="text-red-500 text-sm font-bold ml-2">
            {formatError}
          </p>
        )}

        {showResult && (
          <CoverageResult id="postcode-result" kind={state.phase} postcode={state.postcode} onRetry={handleRetry} />
        )}

        <button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          className="w-full bg-[#FB7E10] hover:bg-orange-600 disabled:opacity-70 disabled:cursor-not-allowed text-white py-4 rounded-full font-bold text-base md:text-lg tracking-tight shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-3"
        >
          {loading ? (
            <>
              <Loader className="animate-spin" size={20} aria-hidden="true" /> Checking...
            </>
          ) : (
            'Check Availability Near You'
          )}
        </button>
      </form>

      <p className="mt-6 text-center text-white text-[11px] font-bold tracking-tight opacity-90">
        Subject to availability. Terms & Conditions apply*
      </p>
    </div>
  );
};

export default QuickAvailabilityForm;
