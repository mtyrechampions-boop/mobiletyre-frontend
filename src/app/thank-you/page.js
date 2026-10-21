import React from 'react';
import ThankYouPage from '@/views/ThankYouPage';

export const metadata = {
  title: 'Thank You | Mobile Tyre Champions',
  description: 'Your request has been received. Our team will contact you shortly to confirm your mobile tyre fitting service.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <ThankYouPage />;
}
