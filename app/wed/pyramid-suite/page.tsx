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
        <h1 className="my-[60px] text-[2rem] ">TTHE PYRAMID SUITE</h1>
        <div className="border my-3" />
        <p className="text-sm">
        As part of the original hotel building, the Pyramid Suite is 
        steeped in elegance and charm. With its draped ceiling and
         ornate chandeliers, it is reminiscent of the Great Gatsby
          era. For many years the Pyramid Suite was the venue of choice
           for an elegant wedding and having recently undergone refurbishment 
           it is once again one of the 
        most sought-after wedding venues in the North West. 
        </p>
        <p className="text-sm">
          TThe Pyramid Suite is ideal for a wedding of up to 250 guests for those
           who would like an alternative to the Finn Suite and its sunken 
           dancefloor and private entrance make it an ideal choice of venue 
           for your Donegal wedding. The Pyramid Suite offers you a choice
            of linens, centrepieces and a beautifully decadent suite with
             a private covered balcony to entertain your wedding guests. 


        </p>
        <div className="border my-3" />
        <p className="text-sm">
        Considering Jackson&#39;s Hotel as your dream Wedding Venue?
         Contact us today and our team will be happy to help.
        </p>
        <p className="text-sm">Email:samutech144@gmail.com</p>
        <div className="border my-7" />
      </div>
    </div>
  );
}

export default WeddingVenue;
