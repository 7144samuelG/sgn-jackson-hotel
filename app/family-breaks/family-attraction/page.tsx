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
          FAMILY ATTRACTIONS
        </h1>
        <div className="text-center">
          <h2 className="my-3 font-semibold text-[2rem] opacity-50">
            Eclipse Cinema
          </h2>
          <p className="st">
            Located a 15 minute drive in Lifford, County Donegal, this Dine-In
            Cinema is complete with 2 Luxury Screens and 5 Standard Cinema
            Screens.
          </p>
          <h2 className="my-3 font-semibold text-[2rem] opacity-50">
            Tropical World, Letterkenny
          </h2>
          <p className="st">
            Located at Alcorn&#39;s garden centre this Butterfly House & Mini
            Zoo is a must-see. In this unique Zoo, you will find a range of
            different animals including birds, reptiles, insects & mammals.
            On-site you can take part in guided tours, visit the children&#39;s
            playground,
          </p>
          <h2 className="my-3 font-semibold text-[2rem] opacity-50">
            Arena 7 Entertainment, Letterkenny
          </h2>
          <p className="st">
            Arena 7 Entertainment Complex is the perfect day out for all the
            family. No matter their ages, they&#39;ll find something to do at
            Arena 7! Choose from a range of activities including bowling, Laser
            Quest, pool, Wayne&#39;s word adventure centre, and arcade games.
            You could even rent out a private room for some Karaoke.
          </p>
          <h2 className="my-3 font-semibold text-[2rem] opacity-50">
            Balor Arts Centre, Ballybofey
          </h2>
          <p className="st">
            A short walk up the road from our hotel will bring you to the Balor
            Arts Centre. This state of the art theatre hosts a range of shows
            and events throughout the year including many popular children&#39;s
            shows.
          </p>
          <h2 className="my-3 font-semibold text-[2rem] opacity-50">
            Lurgyback Farm, Letterkenny
          </h2>
          <p className="st">
            This wonderful farm is a must if you&#39;re traveling Donegal with a
            young family. Children adore meeting and playing with the friendly
            animals. Open March-August.
          </p>
          <h2 className="my-3 font-semibold text-[2rem] opacity-50">
            Donegal Bay Water Bus Tour, Donegal Town
          </h2>
          <p className="st">
            See the beautiful Donegal coast from a different perspective with
            Donegal Bay Tours. Take a visit out to Seal Island and meet a
            real-life seal colony, then along the coast to magnificent views of
            the Bluestack Mountains & coastal islands, all this with full
            commentary.
          </p>
        </div>
        <div className="flex justify-center mb-[100px] mt-[40px]">
          <Image
            src="/images/attr.jpg"
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
