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
          src="/images/break.jpg"
          width={400}
          height={200}
          className="w-full h-[500px]"
          alt=""
        />
      </div>
      <div className="mt-[200px] w-[95%] text-left md:w-[80%] lg:w-[70%] mx-auto">
        <h1 className="text-3xl  text-center opacity-60 py-5 letter-spacing mt-7 mb-10">
          SUMMER FAMILY BREAK
        </h1>
        <div className="flex justify-center">
          <Image
            src="/images/im3.jpg"
            alt=""
            width={600}
            height={500}
            className="w-full md:w-[500px] text-center"
          />
        </div>
        <div className="text-center">
          <h2 className="my-3 font-semibold st">
            Pack up the Kids and Make a Break for Jackson&#39;s Hote
          </h2>
          <p className="st">
            Situated along the banks of ssthe River Finn, Jackson&#39;s is an
            ideal base from which to explore county Donegal. Jackson&#39;s has a
            22-metre Swimming Pool with Gym & Leisure Facilities.
          </p>
          <h1 className="font-bold pt-4 st">
            2 NIGHT FAMILY BREAKS FROM €250 MIDWEEK
          </h1>
          <h1 className="font-bold py-2 st">
            3 NIGHT FAMILY BREAKS FROM €375 MIDWEEK
          </h1>
          
          <h2 className="mb-3 font-semibold st">
            Here are a few of the family friendly activities & days out that we
            recommend:
            <br />
            Walking & Fairy Trails
          </h2>
          <p className="st">
            In Drumboe Woods along the River Finn behind the hotel
          </p>
          <h2 className="mt-5 font-semibold st">
            Cinema Trip with FREE Kids Passes
          </h2>
          <p className="st mb-5">
            Complimentary child&#39;s Cinema Pass for each paying adult <span className="opacity-50"> (15 Mins Away)</span>
          </p>
          <p className="st mb-5 font-semibold">
            Oakfield Park, Train & Gardens
            <span className="opacity-50"> (20 Mins Away)</span>
          </p>
          <p className="st mb-5 font-semibold">
            Beltany Stone Circle | Fintown Railway
            <span className="opacity-50"> (20 Mins Away)</span>
          </p>
          <p className="st mb-5 font-semibold">
            Walled City of Derry & The Derry Girls Tour
            <span className="opacity-50"> (45 Mins Away)</span>
          </p>
          <p className="st mb-5 font-semibold">
            Wild Ireland Animal Sanctuary
            <span className="opacity-50"> (45 Mins Away)</span>
          </p>

          <p className="st mb-5 font-semibold">
            Waterworld, Bundoran
            <span className="opacity-50"> (45 Mins Away)</span>
          </p>
          <p className="st mb-5 font-semibold">
            Tour Donegal&s Wild Atlantic Way Signature Points Including:
            <br />
            <span className="opacity-50">
              Slieve League Sea Cliffs, Malin Head, Fanad Head & Lighthouse
            </span>
          </p>
          <p className="st mb-5 font-semibold">
          Make A Day Of It With A Visit To:
            <br />
            <span className="opacity-50">
            Donegal Town Or Glenveagh National Park 
            </span>
          </p>
        </div>
      </div>
      <div className="md:flex justify-center gap-10">
        <Family imageFamily="f1.jpg" text="Family Break" buttonText="Book Now"/>
        <Family imageFamily="f2.jpg" text="Explore Donegal" buttonText="Read More"/>
        <Family imageFamily="f3.jpg" text="Family Attraction" buttonText="Read More"/>
      </div>
    </div>
  );
}

export default FamilyBreak;
