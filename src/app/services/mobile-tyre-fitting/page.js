import MobileTyreFitting from '@/views/MobileTyreFitting';
import { SERVICE_AREAS_TEXT } from '@/lib/siteText';

export const metadata = {
  title: 'Mobile Tyre Fitting Across London, Surrey & Hampshire | Home & Work Appointments',
  description: `Book mobile tyre fitting at your home or work. Certified technicians, premium tools, and transparent prices. Available across ${SERVICE_AREAS_TEXT}.`,
};

export default function Page() {
  return <MobileTyreFitting />;
}
