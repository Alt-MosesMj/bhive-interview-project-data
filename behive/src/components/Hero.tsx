import React from 'react';

export const Hero: React.FC = () => {
  return (
      <div className='relative flex items-center h-96 bg-gray-100'>
      <img src="/images/landing.png" alt="Host meeting illustration" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 leading-[4rem] flex items-center w-full mx-20 text-center">
        <div className="max-w-3xl flex-1 md:mr-8">
          <h2 className="text-h1 md:text-h1 text-primaryText font-bold mb-4">
            Host your meeting with world-class amenities.
            Starting at <span className='text-yellow-500'>₹199/-!</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
