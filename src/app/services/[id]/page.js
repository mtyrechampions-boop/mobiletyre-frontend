import React from 'react';
import ServiceDetail from '@/views/ServiceDetail';
import { servicesData } from '@/data/servicesData';
import { SERVICE_AREAS_TEXT } from '@/lib/siteText';

export const metadata = {
  title: 'Mobile Tyre Service Details | Mobile Tyre Champions',
  description: `Fast, reliable mobile tyre services available 24/7. ${SERVICE_AREAS_TEXT}.`,
};

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <ServiceDetail id={resolvedParams?.id} />;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({ id: s.id }));
}
