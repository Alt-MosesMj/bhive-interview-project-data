import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { useMobileView } from '../hooks/useMobileView';
import { HeroMobile } from '../components/HeroMobile';
import {Footer as FooterMobile} from '../components/FooterMobile';
import FeaturesSection from '../components/Features';
import { SpaceGrid } from '../components/SpaceGrid';


const Home = () => {
  const isMobile = useMobileView();

  return (
    <div className="bg-gray-50">
      <Header />
      {isMobile ? <HeroMobile /> : <Hero />}
      <FeaturesSection />
      <SpaceGrid/>
      {isMobile ? <FooterMobile /> : <Footer />}
    </div>
  );
};

export default Home;
