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
        <h1 className="my-[60px] text-[3rem] ">WEDDING PACKAGES </h1>
        <p className="text-sm">
        When it comes to planning your wedding, lots of things can be 
        complicated and drawn out but we know what truly matters to couples
         when it comes to choosing the perfect wedding package  clarity and 
         value. We have three fab packages that are designed to be straight 
         forward and offer you flexibility and value for money
         while still giving that wow factor to your guests. 
        </p>
        <p className="text-sm py-4">
        Your Wedding Package Includes 
        </p>
        <ul className="list-disc marker:text-black ">
            <li>Private entrance, Arrivals Lobby and Reception Suite exclusive to you and your guests</li>
            <li>Red Carpet welcome with bubbly served to the Bridal Par</li>
            <li>Décor to include dressed staircase, ornate centrepieces, linens, chair covers, & fairy light backdrop</li>
            <li>Personalised Menu Cards </li>
            <li>Top Table Decos </li>
            <li>Pre-Wedding Spa Packages and complimentary consultation for Bridal Party </li>
            <li>Planning consultations with your Wedding Team </li>
            <li>Breakfast delivered to your Bridal Suite </li>
            <li>Complimentary Dinner to celebrate your First Anniversary </li>
        </ul>
        <div className="border my-3" />
        
      </div>
    </div>
  );
}

export default WeddingVenue;
