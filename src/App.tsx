import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import TrustPilot from './components/TrustPilot';
import Reviews from './components/Reviews';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Features />
        <Stats />
        <TrustPilot />
        <Reviews />
        <HowItWorks />
        <CTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;



