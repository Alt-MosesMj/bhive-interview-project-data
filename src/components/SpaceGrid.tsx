import React from "react";

import spaces from '../data/data';
import SpaceCard from "./SpaceCard";
import { useMobileView } from "../hooks/useMobileView";

export const SpaceGrid: React.FC = () => {

  const isMobile = useMobileView();

  return (
    <section className="md:px-12 xl:mx-20 px-8 xl:p-0 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{isMobile ? 'Our Spaces' : 'Our Space Overview'}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {spaces.map((space) => (
          <SpaceCard key={space.id} space={space} />
        ))
        }
      </div>
    </section>
  );
};
