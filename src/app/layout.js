import './globals.css';
import 'leaflet/dist/leaflet.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TyrePartners from '../components/TyrePartners';
import WhatsAppButton from '../components/WhatsAppButton';
import FloatingCallButton from '../components/FloatingCallButton';
import ScrollToTop from '../components/ScrollToTop';
import MobileActionBar from '../components/MobileActionBar';
import Script from 'next/script';
import CookieConsent from '../components/CookieConsent';


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
        <link rel="icon" href="/favicon.webp" />
        <link rel="apple-touch-icon" href="/favicon.webp" />
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
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1042352164918917');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1042352164918917&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        <ScrollToTop />
        <TyrePartners />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <FloatingCallButton />
        <MobileActionBar />
        <CookieConsent />
      </body>
    </html>
  );
}
