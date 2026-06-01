import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Process from '@/components/Process';
import WhyChoose from '@/components/WhyChoose';
import HowToReadTyre from '@/components/HowToReadTyre';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

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
  description: "Mobile Tyre Champions provides 24/7 emergency mobile tyre fitting, puncture repair and roadside tyre services across London, Surrey, Hampshire, Berkshire and West London.",
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
    { "@type": "City", name: "London" },
    { "@type": "AdministrativeArea", name: "Surrey" },
    { "@type": "AdministrativeArea", name: "Hampshire" },
    { "@type": "AdministrativeArea", name: "Berkshire" },
    { "@type": "Place", name: "West London" },
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
  title: 'Mobile Tyre Fitting in London, Surrey & Hampshire | Mobile Tyre Champions',
  description: 'Mobile Tyre Champions provides 24/7 emergency mobile tyre fitting and roadside tyre services across London, Surrey, Hampshire, Berkshire and West London. Fast local response and expert roadside repairs.',
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
      <HowItWorks />
      <Reviews />
      <FAQ />
      <CTA />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </>
  );
}
