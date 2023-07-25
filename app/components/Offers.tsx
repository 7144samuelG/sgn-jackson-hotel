import React from "react";

export const Offers = () => {
  return (
    <div className="md:flex gap-2 w-full px-4 ">
      <div className="special w-full md:w-1/2 lg:h-[100vh] flex-1"></div>
      <div className="grid md:grid-cols-2 w-full lg:h-[100vh] flex-1 md:w-1/2 gap-2">
        <div className="rooms w-full relative">
          <h2 className="text-white text-2xl font-bold absolute bottom-3 left-4">
            ROOMS
          </h2>
        </div>
        <div className="wedding w-full relative">
          <h2 className="text-white text-2xl font-bold absolute bottom-3 left-4">
            ROOMS
          </h2>
        </div>
        <div className="dinning w-full relative">
          <h2 className="text-white text-2xl font-bold absolute bottom-3 left-4">
            ROOMS
          </h2>
        </div>
        <div className="gallen w-full relative">
          <h2 className="text-white text-2xl font-bold absolute bottom-3 left-4">
            ROOMS
          </h2>
        </div>
      </div>
    </div>
  );
};
