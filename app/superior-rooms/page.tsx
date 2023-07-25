"use client";
import { Header } from "@/app/components/Header";
import SplidePage from "@/app/components/SplidePage";
import SwiperCarousel from "@/app/components/SwiperCarousel";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
function Leisure() {
  const [open, setIsOpen] = useState<Boolean>(true);
  return (
    <div>
      
      <div className="z-0 h-[300px] border">
        <Image
          src="/images/superior.jpg"
          width={400}
          height={200}
          className="w-full h-[500px]"
          alt=""
        />
      </div>
      <div className="mt-[200px] w-[95%] text-left md:w-[80%] lg:w-[70%] mx-auto">
        <div className="grid md:grid-cols-2 items-start ">
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
                <Link href="/classic-rooms">
                  <div className="w-[300px] b pb-4 flex justify-between">
                    <h1 className="text-sm ">CLASSIC ROOMS</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/executive-rooms">
                  <div className="w-[300px] b pb-4 pt-4 flex justify-between">
                    <h1 className="text-sm ">EXECUTIVE ROOMS</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/family-friendly">
                  <div className="w-[300px] b pb-4 pt-4 flex justify-between">
                    <h1 className="text-sm ">FAMILY ROOMS</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/superior-rooms">
                  <div className="w-[300px] b pb-4 pt-4 flex justify-between">
                    <h1 className="text-sm ">SUPERIOR ROOMS</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
              </div>
            )}
          </div>

          <div>
            <h1 className="mb-9 pt-5 text-[3rem] font-semibold w-[100%] b pb-4">
            SUPERIOR ROOMSS
            </h1>
            <h1 className="font-semibold mb-6">
            Jackson&#39;s Hotel & Leisure Centre has a choice of Suites available. Located both
             in the original section of the hotel and in the new modern win.
            </h1>
            <h5 className="font-semibold ">We All Deserve A Little Luxury</h5>
            <p className="py-4">
            Each superior room is furnished to the highest of standards. Unique in style, elegantly furnished, generous in space and size, all of our Superior Suites 
            have modern bathrooms with magnificent steam showers.
            </p>
            <div></div>
          </div>
        </div>
        <div className="mt-5">
          <SwiperCarousel />
        </div>
      </div>
    </div>
  );
}

export default Leisure;
