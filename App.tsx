import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesBar from './components/ServicesBar';
import CategoryCarousel from './components/CategoryCarousel';
import KillerDealSection from './components/KillerDealSection';
import DealsSection from './components/DealsSection';
import PromotionsSection from './components/PromotionsSection';
import NewReleaseSection from './components/NewReleaseSection';
import ForYouSection from './components/ForYouSection';
import SmartphonesTabletsSection from './components/SmartphonesTabletsSection';
import BrandSection from './components/BrandSection';
import AppDownloadSection from './components/AppDownloadSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <ServicesBar />
        <CategoryCarousel />
        <KillerDealSection />
        <DealsSection />
        <PromotionsSection />
        <NewReleaseSection />
        <ForYouSection />
        <SmartphonesTabletsSection />
        <BrandSection />
        <AppDownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;