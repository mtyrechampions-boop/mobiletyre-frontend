import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Process from '@/components/Process';
import WhyChoose from '@/components/WhyChoose';
import HowToReadTyre from '@/components/HowToReadTyre';
import Services from '@/components/Services';
import RecentFittings from '@/components/RecentFittings';
import HowItWorks from '@/components/HowItWorks';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

import { SERVICE_AREAS_TEXT } from '@/lib/siteText';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": "https://mobiletyrechampions.com/#business",
  name: "Mobile Tyre Champions",
  url: "https://mobiletyrechampions.com/",
  logo: "https://mobiletyrechampions.com/logo.png",
  image: "https://mobiletyrechampions.com/logo.png",
  telephone: "+44-XXXXXXXXXX",
  email: "info@mobiletyrechampions.com",
  description: `Mobile Tyre Champions provides 24/7 emergency mobile tyre fitting, puncture repair and roadside tyre services. ${SERVICE_AREAS_TEXT}.`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Grosvenor Road",
    addressLocality: "Aldershot",
    addressRegion: "Hampshire",
    postalCode: "GU11 3HY",
    addressCountry: "GB",
  },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  }],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Surrey" },
    { "@type": "AdministrativeArea", name: "Hampshire" },
    { "@type": "Place", name: "West London" },
    { "@type": "Place", name: "Aldershot" },
    { "@type": "Place", name: "Farnham" },
    { "@type": "Place", name: "Guildford" },
    { "@type": "Place", name: "Camberley" },
    { "@type": "Place", name: "Woking" },
    { "@type": "Place", name: "Basingstoke" },
    { "@type": "Place", name: "M25 Motorway" },
    { "@type": "Place", name: "M3 Motorway" },
    { "@type": "Place", name: "M4 Motorway" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile Tyre Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Mobile Tyre Fitting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "24 Hour Mobile Tyre Replacement" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roadside Tyre Assistance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile Puncture Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Highway Emergency Tyre Service" } },
    ]
  },
  sameAs: [
    "https://www.instagram.com/yourprofile",
    "https://www.facebook.com/yourprofile",
  ]
};

export const metadata = {
  title: 'Mobile Tyre Fitting Across London, Surrey & Hampshire | Mobile Tyre Champions',
  description: `Mobile Tyre Champions provides 24/7 emergency mobile tyre fitting and roadside tyre services. ${SERVICE_AREAS_TEXT}. Fast local response and expert roadside repairs.`,
};

export default function Page() {
  return (
    <>
      <Hero />
      <Features />
      <WhyChoose />
      <Process />
      <HowToReadTyre />
      <Services />
      <RecentFittings />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <CTA />
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-black text-black">Local Coverage</h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">We provide 24/7 mobile tyre fitting, puncture repair and emergency tyre replacement across key local towns including Aldershot, Farnham, Guildford, Camberley, Woking and Basingstoke. Find your nearest technician on our <a href="/locations" className="text-[#FB7E10] font-bold">locations</a> page.</p>

          <ul className="mt-6 flex flex-wrap justify-center gap-4">
            {['Aldershot','Farnham','Guildford','Camberley','Woking','Basingstoke'].map((t) => (
              <li key={t} className="bg-slate-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold"><a href={`/locations#${encodeURIComponent(t)}`} className="hover:text-[#FB7E10]">{t}</a></li>
            ))}
          </ul>
        </div>
      </section>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </>
  );
}
