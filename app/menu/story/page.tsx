import React from "react";
import { Header } from "../../components/Header";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
const Story = () => {
  return (
    <div>
      
      <div className="z-0 h-[300px] border">
        <Image
          src="/images/story.jpg"
          width={400}
          height={200}
          className="w-full h-[500px]"
          alt=""
        />
      </div>
      <div className="mt-[200px] w-[95%] text-left md:w-[80%] lg:w-[70%] mx-auto">
        <h1 className="mb-9 pt-5 text-2xl font-semibold">OUR STORY</h1>
        <h3 className="pb-5 font-semibold">
          Jacksons Hotel was purchased by Tommy Gallen, his wife Bridget and
          their family in 2016 and this is their story.
        </h3>
        <p className="pb-5">
          Tommy Gallen is the owner of three of Donegals most popular
          hospitality businesses; the Villa Rose; Jacksons and An Chuirt Hotels.
          Hotels were not however Tommys first business, nor did they run in the
          family. After leaving school at 15, Tommy pursued a motor mechanic
          apprenticeship and a few years later opened his own garage.
        </p>
        <p className="pb-5">
          Tommys first endeavour with hospitality began in 1992 with the opening
          of Roseville House, Bed & Breakfast on Glenfin Street in Ballybofey.
          Initially comprised of just six bedrooms, it soon grew to an
          eighteen-bedroom guesthouse and paved the way for everything else that
          was to come.
        </p>
        <p className="pb-5">
          Over the next few years Tommy could see an opening for another hotel
          in Ballybofey. He secured a site on Ballybofeys Main Street where now
          stands the Villa Rose Hotel & Spa. Once it opened, Tommy realised
          almost straight away that it was much too small. After turning away
          more business than he cares to remember Tommy set about a plan to
          expand once again.
        </p>
        <p className="pb-5">
          Not only did Tommy know there was need to increase his hotel capacity,
          he saw a gap in the market in a number of areas and particular the gap
          in the market for a destination spa hotel. In 2006 he added a major
          extension including two floors of bedrooms, function suites and one of
          Donegals first Spa facilities featuring seven treatment rooms and a
          purpose built Thermal Suite.
        </p>
      </div>
    </div>
  );
};
export default Story;
