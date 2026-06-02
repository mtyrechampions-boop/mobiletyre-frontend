import LocationSEOPage from '@/views/LocationSEOPage';
import { SERVICE_AREAS_TEXT } from '@/lib/siteText';

// Define the locations we want to pre-render for SEO
const seoLocations = [
    'hampshire',
    'berkshire',
    'surrey',
    'reading'
];

// Generate static params for these locations so Next.js pre-renders them at build time
export function generateStaticParams() {
    return seoLocations.map((location) => ({
        location: location,
    }));
}

// Dynamically generate metadata for each location page
export async function generateMetadata({ params }) {
    const { location } = await params;
    
    // Capitalize the first letter for the title
    const formattedLocation = location.charAt(0).toUpperCase() + location.slice(1);
    
    return {
        title: `24/7 Mobile Tyre Fitting in ${formattedLocation} | Mobile Tyre Champions`,
        description: `Need emergency mobile tyre fitting in ${formattedLocation}? Mobile Tyre Champions offers rapid response roadside tyre replacement and repair. ${SERVICE_AREAS_TEXT}.`,
        alternates: {
            canonical: `https://mobiletyrechampions.com/locations/${location}`
        }
    };
}

export default async function Page({ params }) {
    const { location } = await params;

    // Check if the requested location is one of our SEO locations, 
    // though Next.js handles this automatically with dynamic routes.
    
    return <LocationSEOPage location={location} />;
}
