import React, { Suspense } from 'react';
import BookingPage from '@/views/BookingPage';

export const metadata = {
  title: 'Secure Online Booking | Mobile Tyre Champions',
  description: 'Book your mobile tyre fitting appointment online. Safe, secure, and fast. IMI-certified technicians dispatched to your location.',
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center font-bold text-slate-800">Loading...</div>}>
      <BookingPage />
    </Suspense>
  );
}
