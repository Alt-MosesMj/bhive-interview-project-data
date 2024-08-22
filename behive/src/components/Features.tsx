import CommunityIcon from '../assets/community.svg';
import AffordableIcon from '../assets/affordable.svg';
import GymIcon from '../assets/gym.svg';
import WifiIcon from '../assets/wifi.svg';
import ComfortIcon from '../assets/lounges.svg';
import BookingIcon from '../assets/booking.svg';
import CafeIcon from '../assets/cafe.svg';
import SportsIcon from '../assets/sports-area.svg';
import { Feature } from '../types';
import { useMobileView } from '../hooks/useMobileView';

const FeaturesSection: React.FC = () => {

  const isMobile = useMobileView();

  const features : Feature [] = [
    { icon: CommunityIcon, title: 'Community Events' , bb : true, br : true},
    { icon: GymIcon, title: 'Gym Facilities' , bb : true, br : true},
    { icon: WifiIcon, title: 'High-Speed WiFi' , bb : true, br : true},
    { icon: CafeIcon, title: 'Cafe & Tea Bar', bb : true },
    { icon: AffordableIcon, title: 'Affordable', br : true },
    { icon: ComfortIcon, title: 'Comfort Lounges', br : true },
    { icon: BookingIcon, title: 'Quick Booking', br : true },
    { icon: SportsIcon, title: 'Sports Area' },
  ];
  

  return (
    <div className="w-full py-10 ">
      <div className="md:px-12 xl:mx-20 px-8 xl:p-0 ">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          {features.map((feature, index) => (
            isMobile ? 
              <FeatureCardMobile
                key={index}
                index={index}
                icon={feature.icon}
                title={feature.title}
              />
              : 
              <FeatureCard 
                key={index}
                index={index}
                icon={feature.icon}
                title={feature.title}
                bb={feature.bb}
                br={feature.br}
              />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard : React.FC<Feature> = ({index, icon , title, bb , br}) =>{
  return (
    <div key={index} className={`flex items-center border-gray-300 px-6 py-8 ${ 
      br ? 'border-r' : ''} 
      ${bb? 'border-b' : ''}`}>
    <img
      src={icon}
      alt={title}
      className="w-8 h-8 mr-4" 
    />
    <p className="text-lg font-medium text-gray-900">{title}</p>
  </div>
  );
};

const FeatureCardMobile : React.FC<Feature> = ({index, icon , title}) =>{
  return (
    <div key={index} className="flex flex-col items-center border-gray-300 m-2 p-2 md:px-4 bg-white rounded-lg shadow shadow-lg transition-shadow">
    <img
      src={icon}
      alt={title}
      className="w-12 h-12 mb-2" 
    />
    <p className="text-center text-gray-700 font-semibold">{title}</p>
  </div>
  );
};

export default FeaturesSection;
