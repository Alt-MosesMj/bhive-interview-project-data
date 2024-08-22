import React from 'react';

interface SpaceCardProps {
  name: string;
  address: string;
  price: number;
  imageUrl: string;
  googleMapsUrl: string;
}

export const SpaceCard: React.FC<SpaceCardProps> = ({ name, address, price, imageUrl, googleMapsUrl }) => {
  return (
    <div className="border border-secondaryDarkGrey rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-h4 font-semibold text-primaryText">{name}</h3>
        <p className="text-secondaryText text-body mb-4">{address}</p>
        <div className="flex justify-between items-center">
          <a
            href={googleMapsUrl}
            className="text-primaryDarkYellow font-medium underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Maps
          </a>
          <span className="bg-primaryYellow text-primaryText px-4 py-2 rounded-lg font-bold">
            ₹{price}
          </span>
        </div>
      </div>
    </div>
  );
};
