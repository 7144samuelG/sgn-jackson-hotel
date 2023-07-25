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
          src="/images/classic.jpg"
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
                <Link href="/">
                  <div className="w-[300px] b pb-4 pt-4 flex justify-between">
                    <h1 className="text-sm ">FAMILY ROOMS</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/">
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
              CLASSIC ROOMS
            </h1>
            <h1 className="font-semibold mb-6">
              Classic Rooms are located in original wing of Jackson&#39;s Hotel
              & Leisure Club
            </h1>
            <h5 className="font-semibold ">Classic Comfort</h5>
            <p className="py-4">
              Our Traditional Rooms are spacious and comfortable with Irish
              country decor.
            </p>
            <p className="py-4">
              Refurbished since early 2018 and located in the original hotel you
              will be close to all our facilities including bar, restaurant and
              leisure centre.
            </p>
            <p className="py-4">
              We also have rooms for our disabled guests, which are easily
              accessible from all areas of the Hotel
            </p>
            <h1 className="mb-9 pt-5  font-semibold w-[100%] b pb-4">
              All Rooms Feature
            </h1>
            <ul className="list-disc marker:text-black mb-8">
              <li className="my-2">TV with a choice of channels</li>
              <li className="mb-2">Hairdryer</li>
              <li className="mb-2">Trouser press, iron and ironing board</li>
              <li className="mb-2">Tea/coffee making facilities</li>
              <li className="mb-2">Direct dial telephone </li>
              <li className="mb-2">Complimentary Wi-Fi</li>
              <li className="mb-2">Work desk</li>
            </ul>
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
