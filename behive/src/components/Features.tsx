import React from 'react';
// Import your icons as SVGs or PNGs
import CommunityIcon from '../assets/community.svg';
import AffordableIcon from '../assets/affordable.svg';
import GymIcon from '../assets/gym.svg';
import WifiIcon from '../assets/wifi.svg';
import ComfortIcon from '../assets/lounges.svg';
import BookingIcon from '../assets/booking.svg';
import CafeIcon from '../assets/cafe.svg';
import SportsIcon from '../assets/sports-area.svg';

const FeaturesSection: React.FC = () => {

  const features = [
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
      <div className="mx-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          {features.map((feature, index) => (
            <div key={index} className={`flex items-center border-gray-300 px-6 py-8 ${ 
                feature?.br ? 'border-r' : ''} 
                ${ feature?. bb? 'border-b' : ''}`}>
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-8 h-8 mr-4" 
              />
              <p className="text-lg font-medium text-gray-900">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
