import LocationsPage from '@/views/LocationsPage';
import { SERVICE_AREAS_TEXT } from '@/lib/siteText';

export const metadata = {
  title: 'Areas We Cover | 24/7 Mobile Tyre Fitting | Mobile Tyre Champions',
  description: `View the complete list of locations serviced by Mobile Tyre Champions. We provide 24/7 mobile tyre fitting, emergency puncture repair, and locking wheel nut removal. ${SERVICE_AREAS_TEXT}.`,
};

export default function Page() {
  return <LocationsPage />;
}
