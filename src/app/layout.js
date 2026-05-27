import './globals.css';
import 'leaflet/dist/leaflet.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TyrePartners from '../components/TyrePartners';
import WhatsAppButton from '../components/WhatsAppButton';
import FloatingCallButton from '../components/FloatingCallButton';
import ScrollToTop from '../components/ScrollToTop';
import Script from 'next/script';

export const metadata = {
  title: 'Mobile Tyre Fitting Near Me | Mobile Tyre Service UK',
  description: 'Looking for mobile tyre fitting near me? Mobile Tyre Champions offers Mobile Tyre Service UK solutions, including fast mobile tyre repair and roadside support.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="min-h-screen bg-slate-50 antialiased pt-20 md:pt-24">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DFKREJHWR3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DFKREJHWR3');
          `}
        </Script>
        <ScrollToTop />
        <TyrePartners />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <FloatingCallButton />
      </body>
    </html>
  );
}
