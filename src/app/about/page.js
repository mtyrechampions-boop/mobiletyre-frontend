import AboutPage from '@/views/AboutPage';
import { SERVICE_AREAS_TEXT } from '@/lib/siteText';

export const metadata = {
  title: 'About Us | Mobile Tyre Champions',
  description: `Learn more about Mobile Tyre Champions. IMI-certified mobile technicians, workshop-grade equipment, 24/7 service, and transparent pricing in ${SERVICE_AREAS_TEXT}.`,
};

export default function Page() {
  return <AboutPage />;
}
