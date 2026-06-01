import EmergencyTyreFitting from '@/views/EmergencyTyreFitting';
import { SERVICE_AREAS_TEXT } from '@/lib/siteText';

export const metadata = {
  title: 'Emergency Tyre Service | Mobile Tyre Fitting Across London, Surrey & Hampshire',
  description: `Stranded with a puncture or blowout? Our emergency mobile tyre fitting service operates 24/7 across ${SERVICE_AREAS_TEXT}. Arrival in 30-60 minutes.`,
};

export default function Page() {
  return <EmergencyTyreFitting />;
}
