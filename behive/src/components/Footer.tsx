import React from 'react';
import GooglePlaySVG from '../assets/googleplay.svg?react';
import AppleStoreSVG from '../assets/applestore.svg?react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondaryGrey h-[30rem] mt-4">
        <div className="container px-20 h-full relative">
          <h2 className="text-3xl font-bold text-gray-800">
            Download our app now
          </h2>
          <div className='bg-white rounded-[18px] h-60 absolute w-[calc(100%_-_10rem)] bottom-4'></div>
          <div className="flex justify-center mb-8 md:mb-0 absolute  bottom-4">
            <img
              src="/images/appstore.svg"
              alt="BHIVE Workspace app screen 1"
              className="w-1/2 md:w-auto"
            />
          </div>
          <div className="flex flex-col items-center text-center md:text-left md:items-start absolute right-28 bottom-20">
            <p className="text-gray-600 text-lg mb-4">
              Boost your productivity with the BHIVE Workspace app.
              <br />
              Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="inline-block">
                <GooglePlaySVG className="h-12" alt="Download on the App Store" />
              </a>
              <a href="#" className="inline-block">
                <AppleStoreSVG className="h-12" alt="Download on the App Store" />
              </a>
            </div>
          </div>
      </div>
      <p className="text-secondaryText text-center text-body bg-[#222E34] text-[#DDDDDD]"> &copy; Copyright 2024. Bhive Private Limited</p>
    </footer>
  );
};


export default Footer;
