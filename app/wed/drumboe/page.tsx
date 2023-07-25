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
        <h1 className="my-[60px] text-[2rem] ">THE DRUMBOE SUITE </h1>
        <div className="border my-3" />
        <p className="text-sm">
        Perfect for your intimate wedding celebration the Drumboe
         Suite is ideal for those looking to host a small wedding 
         but still want the elegance of a hotel setting.  Located in
          the main hotel the self-contained suite is accessed through
           the main hotel entrance and is equipped with its own bar
            and dancefloor. It&#39;s muted tones and wood panelling 
        give the room an intimate yet sophisticated ambience. 
        </p>
        <p className="text-sm">
        The Drumboe Suite is the dream venue for a wedding of under 100 
        guests and allows guests to mingle and celebrate in a comfortable,
         intimate setting. As with all our Wedding Suites, the Drumboe 
         offers a choice of centrepieces and has all the
         finishing touches that a Jacksons Hotel wedding is known for. 
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
