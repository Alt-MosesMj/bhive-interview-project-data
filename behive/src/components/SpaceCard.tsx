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
      <div className="mx-4 relative">
        <img
          src={space.images[0]}
          alt={space.name}
          className="w-full h-40 object-cover rounded-lg"
        />
        <div 
          className='absolute items-center text-[#FFBB00] rounded p-1 left-2 top-2 flex bg-gradient-to-r from-[#263238] via-[#2a414d] to-[#2f4b59]'>
          <img
            src={space.icon}
            alt={space.name}
            className="mr-1"
          />
        <span>{space.type}</span>
        </div>
      </div>

      <div className="p-4 flex gap-4 items-center ">
        <DayPassCard passType="Day Pass" originalPrice={249}  />
        <BulkPassCard
          passType="Bulk Pass"
          originalPrice={2400}
          discountedPrice={1992}
          days={10}
          discountPercentage={20}
        />
      </div>

    </div>
  );
};

export default SpaceCard;
