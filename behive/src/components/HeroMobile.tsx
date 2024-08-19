import React from 'react';

export const HeroMobile: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center bg-white px-4 py-8">
      <img src="/static_assets/hero-image.svg" alt="Host meeting illustration" className="w-3/4 h-auto mb-4" />
      <h1 className="text-h4 text-primaryText font-bold mb-4">
        Host your meeting with world-class amenities. Starting at ₹199/-!
      </h1>
      <p className="text-secondaryText text-body">Enjoy flexible spaces with high-speed internet.</p>
    </div>
  );
};
