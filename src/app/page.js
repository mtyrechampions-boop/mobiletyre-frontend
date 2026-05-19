import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Process from '@/components/Process';
import HowToReadTyre from '@/components/HowToReadTyre';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Mobile Tyre Champions | 24/7 Emergency Mobile Tyre Fitting',
  description: 'Stranded? Professional mobile tyre fitting delivered to your location in 30-60 minutes. Available 24/7 across Surrey & Hampshire. Call 0207 101 3856.',
};

export default function Page() {
  return (
    <>
      <Hero />
      <Features />
      <Process />
      <HowToReadTyre />
      <Services />
      <HowItWorks />
      <FAQ />
      <CTA />
    </>
  );
}
