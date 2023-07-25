"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import WeddingLinks from "../../components/WeddingLinks";
import { Header } from "../../components/Header";
function Wedding() {
  const [open, setIsOpen] = useState<Boolean>(true);
  return (
    <div>
      
      <div className="z-0 h-[300px] border">
        <Image
          src="/images/wedding_home_banner.jpg"
          width={400}
          height={200}
          className="w-full h-[600px]"
          alt=""
        />
      </div>
      <div className="mt-[330px] w-[95%]  mx-auto">
        <h1 className="my-[60px] text-[2rem] text-center">WEDDINGS</h1>
        <p className="text-sm text-center">
          Set along the tranquil River Finn with Drumboe Woods in the
          background, Jackson&#39;s Hotel has long been established as one of
          Donegal&#39;s finest Wedding Venues. Part of the Gallen Hospitality
          family, Jackson&#39;s Hotel has an unrivalled reputation for excellent
          customer service, fabulous food and an enthusiasm to help couples
          create their perfect Wedding Day
        </p>
        <p className="text-sm mt-[20px] text-center">
          With a selection of beautiful suites to choose from, we can cater for
          all types of weddings from an intimate wedding or a civil ceremony to
          a more traditional Irish Wedding of up to 500 guests. The jewel in our
          crown is the fabulous Finn Suite with its private entrance, sweeping
          staircase and stunning terrace views the perfect romantic wedding
        </p>
        <div className="flex flex-col items-center mt-[20px] mb-[60px] opacity-70">
          <FaChevronDown />
          <p>READ MORE</p>
        </div>
        <WeddingLinks/>
      </div>
    </div>
  );
}

export default Wedding;
