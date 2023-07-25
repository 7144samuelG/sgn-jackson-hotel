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
        <h1 className="my-[60px] text-[2rem] ">THE FINN SUITE</h1>
        <div className="border my-3" />
        <p className="text-sm">
          The jewel in the crown the Finn Suite has its own private entrance for
          you and your guests and leads directly to a welcoming arrivals lobby
          complete with a spectacular sweeping staircase, ideal for stunning
          photographs. Purpose-built to host weddings, the Finn Suite is a firm
          favourite for your Donegal Wedding as it boasts fabulous views of the
          River Finn and Drumboe Woods.
        </p>
        <p className="text-sm">
          The Finn Suite has the capacity to host a wedding for 100-500 guests,
          the unique partition means that the room can transform easily and
          adapt to the numbers needed. We have everything you need for your
          perfect wedding including a fairy light backdrop to set off your Top
          Table, a choice of ornate centrepieces, chair covers and linens with a
          choice of bows to match your theme, cake table with stand and the
          entrance and suite decorated with flowers and lanterns to create your
          picture-perfect wedding
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
