"use client";
import { Header } from "@/app/components/Header";
import WeddingLinks2 from "@/app/components/WeddingLinks2";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
function WeddingVenue() {
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
        As one of the largest hotels in Donegal, Jackson&#39;s Hotel offers 
        a fabulous choice of Suites to celebrate your day. Each suite has a 
        unique style and capacity to suit your individual wedding needs.
         All our suites offer comfort, a sense of luxury and are have their
          own bar and dancefloor.
         Talk to us today to tailor your wedding day to suit your own style.
        </p>
        <div className="flex flex-col items-center mt-[20px] mb-[60px] opacity-70">
          <FaChevronDown />
          <p>READ MORE</p>
        </div>
        <WeddingLinks2/>
      </div>
    </div>
  );
}

export default WeddingVenue;
