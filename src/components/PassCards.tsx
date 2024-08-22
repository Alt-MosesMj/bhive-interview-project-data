import React from "react";
import ArrowSVG from '../assets/arrow.svg?react';

interface PassProps {
  passType: string;
  originalPrice?: number;
  discountedPrice?: number;
  days?: number;
  discountPercentage?: number;
}

export const BulkPassCard: React.FC<PassProps> = ({
  passType,
  discountedPrice,
  days,
  discountPercentage,
}) => {
  return (
    <div className="w-[50%] relative p-4 md:p-2 lg:p-4 bg-[#FFCF4B] rounded-lg flex items-center justify-between">
      {discountPercentage && (
        <div className="absolute -top-2 md:-top-4 lg:-top-2 left-[25%] text-xs bg-[#263238] text-white px-2 py-1 rounded">
          {discountPercentage}% Discount
        </div>
      )}
      <div>
        <p className="text-sm text-gray-700 font-medium	color-[#514D2D]">{passType}</p>
        <p className="lg:text-lg text-base font-bold text-[#263238]">
          ₹{discountedPrice}
          {days && <span className="text-sm font-normal">/{days} Days</span>}
        </p>
      </div>
      <div>
        <span className="flex"><ArrowSVG className="opacity-40" /> <ArrowSVG className="opacity-60" /> <ArrowSVG/> </span>
      </div>
    </div>
  );
};

export const DayPassCard: React.FC<PassProps> = ({
  passType,
  originalPrice,
}) => {
  return (
    <div className="w-[50%] p-4 md:p-2 lg:p-4 bg-[#F9F9F9] border border-[#EEE7E7] rounded-lg flex items-center justify-between">
      <div>
        <p className="text-sm text-[#65624C]">{passType}</p>
        <p className="text-lg font-bold text-[#263238]">
          ₹{ ` ${originalPrice}`}
          {originalPrice && <span className="text-sm font-normal">/ Day</span>}
        </p>
      </div>
      <div>
        <span className="text-xl text-gray-700 flex"><ArrowSVG className="opacity-40"/> <ArrowSVG className="opacity-60"/> <ArrowSVG/>  </span>
      </div>
    </div>
  );
};
