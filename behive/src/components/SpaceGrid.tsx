import React from "react";
export const SpaceGrid: React.FC = () => {
    return (
      <section className="px-4 py-8">
        <h2 className="text-h3 text-primaryText font-bold mb-8">Our Spaces</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Render SpaceCard components dynamically */}
        </div>
      </section>
    );
};
  