import React, { Suspense } from 'react';
import ContactPage from '@/views/ContactPage';

export const metadata = {
  title: 'Contact Us | 24/7 Mobile Tyre Service | Mobile Tyre Champions',
  description: 'Get in touch with Mobile Tyre Champions. Call us 24/7 on 0207 101 3856 or submit a callback request for fast mobile tyre fitting or puncture repair.',
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center font-bold text-slate-800">Loading...</div>}>
      <ContactPage />
    </Suspense>
  );
}
