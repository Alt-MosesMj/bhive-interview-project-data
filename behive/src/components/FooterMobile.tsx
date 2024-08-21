import GooglePlaySVG from '../assets/googleplay.svg?react';
import AppleStoreSVG from '../assets/applestore.svg?react';

export const Footer: React.FC = () => {
  return (
    <footer >
      <div className="bg-secondaryGrey text-center p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-left mb-4">
          Download our app now
        </h2>
        <div className="flex flex-col justify-center mb-4 p-4 bg-white shadow-md rounded-lg">
          <img src="/images/Icons/appstore.svg" alt="App Store" className="mx-2" />
          <div className="flex space-x-4 mx-2 justify-between mt-4">
            <a href="#" className="inline-block">
              <GooglePlaySVG className="h-12 max-w-32"/>
            </a>
            <a href="#" className="inline-block">
              <AppleStoreSVG className="h-12 max-w-32" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-secondaryText text-center text-body bg-[#222E34] text-[#DDDDDD]"> &copy; Copyright 2024. Bhive Private Limited</p>
    </footer>
  );
};