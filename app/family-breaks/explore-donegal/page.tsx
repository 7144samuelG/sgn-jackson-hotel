"use client";
import Family from "@/app/components/Family";
import DarkVariantExample from "@/app/components/GardenCarousel";
import { Header } from "@/app/components/Header";
import SplidePage from "@/app/components/SplidePage";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
function FamilyBreak() {
  const [open, setIsOpen] = useState<Boolean>(true);
  return (
    <div>
      
      <div className="z-0 h-[300px] border">
        <Image
          src="/images/im3.jpg"
          width={400}
          height={200}
          className="w-full h-[500px]"
          alt=""
        />
      </div>
      <div className="mt-[200px] w-[95%] text-left md:w-[80%] lg:w-[70%] mx-auto">
        <h1 className="text-[60px]  text-center  py-5 letter-spacing mt-7 mb-10">
          EXPLORE DONEGAL
        </h1>
        <div className="text-center">
          <h2 className="my-3 font-semibold text-[2rem] opacity-50">
            Oakfield Park
          </h2>
          <p>
            Raphoe, Co. Donegal
            <br />
            An 18th-century Georgian Deanery sitting in a lush landscape of
            parklands & mature woodlands, overlooking the distant Croaghan
            Mountain, the grounds include a traditional walled garden and a
            4.5km narrow gauge railway track & trains
          </p>
          <h2 className="my-3 font-semibold text-[2rem] opacity-50">
            Glenveagh National Park
          </h2>
          <p>
            One of Ireland&#39;s 6 national parks, it is situated in Northwest
            Donegal and encompasses 16,000 acres in the heart of the Derryveagh
            mountains.
          </p>
          <h2 className="my-3 font-semibold text-[2rem] opacity-50">
            Sliabh Liag Sea Cliffs
          </h2>
          <p>
            situated on the west coast of Donegal, and stands 600 metres above
            the wild Atlantic Ocean. It is the highest and one of the finest
            marine cliffs in Europe.
          </p>
          <h2 className="my-3 font-semibold text-[2rem] opacity-50">
            Walled City of Derry
          </h2>
          <p>
            The Walls, which are approximately 1.5km in circumference, form a
            walkway around the inner city and provide a unique promenade to view
            the layout of the original town which still preserves its
            Renaissance Style street plan to this day. This is the only
            remaining completely walled city in Ireland and one of the finest
            examples of Walled Cities in Europe.
          </p>
          <h2 className="my-3 font-semibold text-[2rem] opacity-50">
            Fanad Lighthouse
          </h2>
          <p>
            The second of Donegal&#39;s Discovery Points on the Wild Atlantic
            Way. Here man&#39;s presence and his ability to exist in even the
            wildest of locations is seen in the form of Fanad Head Lighthouse.
          </p>
          <h2 className="my-3 font-semibold text-[2rem] opacity-50">
            Malin Head
          </h2>
          <p>
            Ireland&#39;s most northerly point, with the sea swelling on three
            sides and cliffs offers the visit that true sense of isolation while
            not too far for the world of today..
          </p>
        </div>
        <div className="flex justify-center mb-[100px] mt-[40px]">
          <Image
            src="/images/donegal.jpg"
            alt=""
            width={600}
            height={500}
            className="w-full md:w-[500px] text-center"
          />
        </div>
      </div>
    </div>
  );
}

export default FamilyBreak;
