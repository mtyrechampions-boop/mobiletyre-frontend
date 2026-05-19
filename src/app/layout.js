import './globals.css';
import 'leaflet/dist/leaflet.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TyrePartners from '../components/TyrePartners';
import WhatsAppButton from '../components/WhatsAppButton';
import FloatingCallButton from '../components/FloatingCallButton';
import ScrollToTop from '../components/ScrollToTop';

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
      </head>
      <body className="min-h-screen bg-slate-50 antialiased">
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
