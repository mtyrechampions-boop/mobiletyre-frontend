import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TyrePartners from '../components/TyrePartners';
import WhatsAppButton from '../components/WhatsAppButton';
import FloatingCallButton from '../components/FloatingCallButton';
import ScrollToTop from '../components/ScrollToTop';
import Script from 'next/script';

export const metadata = {
  title: 'Mobile Tyre Champions | UK\'s Fast Mobile Tyre Service',
  description: 'Roadside mobile tyre fitting and emergency tyre repair across London and surrounding areas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin="" />
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
            gtag('config', 'AW-18265866087/9nWkCI63q-kcEOf-64VE', {
              'phone_conversion_number': '02071013856'
            });
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
