import React from 'react';
import { Space } from '../types';
import  DirectionSVG from '../assets/direction.svg?react';
import { BulkPassCard, DayPassCard } from './PassCards';

type SpaceCardProps = {
  space: Space;
};

const SpaceCard: React.FC<SpaceCardProps> = ({ space }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-xl font-bold text-[#263238] max-w-[70%]">{space.name}</h3>
        <a  
          href={space.google_maps_url} 
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-md bg-[#F9F9F9] flex flex-col justify-between items-center border-[0.5px] border-solid border-[#EEE7E7]">
          <DirectionSVG/>
          <div className="flex items-center text-sm text-[#65624C] pt-2">
            <span >6 Kms</span>
          </div>
        </a>
      </div>
      <div className="mx-4">
        <img
          src={space.images[0]}
          alt={space.name}
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>

      <div className="p-4 flex items-center justify-between">
        <DayPassCard passType="Day Pass" originalPrice={249}  />
        <BulkPassCard
          passType="Bulk Pass"
          originalPrice={2400}
          discountedPrice={1992}
          days={10}
          discountPercentage={20}
        />
      </div>

      {/* <div className="p-4">
        <p className="text-sm text-gray-600">{space.address}</p>
        <p className="text-xl font-semibold text-yellow-500 mt-2">
          ₹{space.day_pass_price}
        </p>
        <div className="mt-2">
          <a
            href={space.google_maps_url}
            className="text-blue-500 text-sm underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <ul className="text-sm text-gray-600 mt-2">
          {space.amenities?.map((amenity, index) => (
            <li key={index}>- {amenity}</li>
          ))}
        </ul>
        {space.is_day_pass_enabled && space.day_pass_discounts_percentage[10] && (
          <p className="text-sm text-green-600 mt-2">
            {space.day_pass_discounts_percentage[10].message}
          </p>
        )}
      </div> */}
    </div>
  );
};

export default SpaceCard;
