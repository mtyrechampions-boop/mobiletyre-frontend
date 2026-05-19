import React from 'react';
import ServiceDetail from '@/views/ServiceDetail';
import { servicesData } from '@/data/servicesData';

export const metadata = {
  title: 'Mobile Tyre Service Details | Mobile Tyre Champions',
  description: 'Fast, reliable mobile tyre services available 24/7 across Surrey and Hampshire.',
};

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <ServiceDetail id={resolvedParams?.id} />;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({ id: s.id }));
}
