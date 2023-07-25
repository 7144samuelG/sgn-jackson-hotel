"use client";
import { Header } from "@/app/components/Header";
import WeddingLinks2 from "@/app/components/WeddingLinks2";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
function WeddingVenue() {
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
      <div className="mt-[330px] w-[95%] md:w-[80%]  mx-auto">
        <h1 className="my-[60px] text-[2rem] ">CEREMONY OPTIONS </h1>
        <div className="border my-3" />
        <p className="text-sm">
        We have many options to exchange your vows here at Jackson&#39;s 
        Hotel with a Civil Ceremony and Humanist ceremony proving to 
        be popular choices for many modern couples. You can choose to 
        say I Do under the elegant draping of our Pyramid Suite which
         is ideal for a beautiful wedding ceremony. Another popular
          option is our Finn Suite which can easily be adapted for 
          your wedding ceremony needs either in the main suite or below
           the stunning staircase. Finally, for those wishing to exchange 
           vows in an outdoor setting, we have a gorgeous spot overlooking
            River Finn which is
         a beautiful romantic choice for your civil ceremony.  
        </p>
      </div>
    </div>
  );
}

export default WeddingVenue;
