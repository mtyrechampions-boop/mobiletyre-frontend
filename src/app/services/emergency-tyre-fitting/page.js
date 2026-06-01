import EmergencyTyreFitting from '@/views/EmergencyTyreFitting';
import { SERVICE_AREAS_TEXT } from '@/lib/siteText';

export const metadata = {
  title: 'Emergency Mobile Tyre Fitting | 24/7 Roadside Assistance',
  description: `Stranded with a puncture or blowout? Our emergency mobile tyre fitting service operates 24/7 across ${SERVICE_AREAS_TEXT.replace('Covering ', '')}. Arrival in 30-60 minutes.`,
};

export default function Page() {
  return <EmergencyTyreFitting />;
}
