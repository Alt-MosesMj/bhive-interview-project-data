// src/pages/Home.tsx
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SpaceCard from '../components/SpaceCard';
import Footer from '../components/Footer';
import spaces from '../data/data';
import { useMobileView } from '../hooks/useMobileView';
import { HeroMobile } from '../components/HeroMobile';
// import {SpaceCard as SpaceCardMobile} from '../components/SpaceCardMobile';
import {Footer as FooterMobile} from '../components/FooterMobile';
import FeaturesSection from '../components/Features';


const Home = () => {
  const isMobile = useMobileView();

  return (
    <div className="bg-gray-50">
      <Header />
      {isMobile ? <HeroMobile /> : <Hero />}
      <FeaturesSection />
      <section className="mx-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Space Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {spaces.map((space) => (
            <SpaceCard key={space.id} space={space} />
            // isMobile ? 
            // <SpaceCardMobile key={space.id} space={space}  /> 
            // : <SpaceCard  key={space.id} space={space} />
            
          ))
          }
        </div>
      </section>
      {isMobile ? <FooterMobile /> : <Footer />}
    </div>
  );
};

export default Home;
