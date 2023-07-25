"use client";
import DonegalSwiper from "@/app/components/DonegalSwiper";
import { Header } from "@/app/components/Header";
import SplidePage from "@/app/components/SplidePage";
import SwiperCarousel from "@/app/components/SwiperCarousel";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
function Conference() {
  const [open, setIsOpen] = useState<Boolean>(true);
  return (
    <div>
      
      <div className="z-0 h-[500px] border">
        <DonegalSwiper />
      </div>
      <div className="mt-[50px] w-[95%] text-left md:w-[80%] lg:w-[70%] mx-auto">
        <div className="grid md:grid-cols-2 items-start w-full ">
          <div className="hidden md:grid">
            <div
              className="w-[300px] b flex justify-between mb-9 pt-8 pb-4"
              onClick={() => setIsOpen(!open)}
            >
              <h1 className="text-sm ">MENU</h1>
              <FaChevronRight size={10} />
            </div>
            {open && (
              <div>
                <Link href="/">
                  <div className="w-[300px] b pb-4 flex justify-between">
                    <h1 className="text-sm ">FACILITIES</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/">
                  <div className="w-[300px] b pb-4 pt-4 flex justify-between">
                    <h1 className="text-sm ">LOCATION</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/">
                  <div className="w-[300px] b pb-4 pt-4 flex justify-between">
                    <h1 className="text-sm ">WHY DONEGAL?</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/">
                  <div className="w-[300px] b pb-4 pt-4 flex justify-between">
                    <h1 className="text-sm ">MEETING ENQUIRY</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/">
                  <div className="w-[300px] b pb-4 pt-4 flex justify-between">
                    <h1 className="text-sm ">LEISURE TIME</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
              </div>
            )}
          </div>

          <div className="flex-1">
            <h1 className="mb-9 pt-5 text-[2rem] font-semibold w-[100%] b pb-4">
              WHY DONEGAL?
            </h1>
            <div>
              <p className="text-[1rem] py-3 ">
                Combined Jacksons&#39;Hotel & Villa Rose Hotel have a 22 Meter Heated Swimming Pool,Gym,Steam Room,Sauna,7 Treatment 
                Rooms,Thermal Suite,Relaxation Suite & Hair Salon.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conference;
