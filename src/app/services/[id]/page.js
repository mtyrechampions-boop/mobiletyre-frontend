import React from 'react';
import ServiceDetail from '@/views/ServiceDetail';

export const metadata = {
  title: 'Mobile Tyre Service Details | Mobile Tyre Champions',
  description: 'Fast, reliable mobile tyre services available 24/7 across Surrey and Hampshire.',
};

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <ServiceDetail id={resolvedParams?.id} />;
}
