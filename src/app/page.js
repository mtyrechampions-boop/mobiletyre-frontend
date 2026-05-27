import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Process from '@/components/Process';
import WhyChoose from '@/components/WhyChoose';
import HowToReadTyre from '@/components/HowToReadTyre';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Mobile Tyre Fitting Near Me | Mobile Tyre Service UK',
  description: 'Looking for mobile tyre fitting near me? Mobile Tyre Champions offers Mobile Tyre Service UK solutions, including fast mobile tyre repair and roadside support.',
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
      <FAQ />
      <CTA />
    </>
  );
}
