import React, { Suspense } from 'react';
import TyreFinderPage from '@/views/TyreFinderPage';
import { SERVICE_AREAS_TEXT } from '@/lib/siteText';

export const metadata = {
  title: 'Find the Right Tyres for Your Car | Mobile Tyre Champions',
  description: `Use our free tyre registration lookup tool to find the exact tyres for your vehicle in seconds. Search by size or reg plate — then book a mobile fitting across ${SERVICE_AREAS_TEXT.replace('Covering ', '')}.`,
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center font-bold text-slate-800">Loading...</div>}>

      <TyreFinderPage />
    </Suspense>
  );
}
