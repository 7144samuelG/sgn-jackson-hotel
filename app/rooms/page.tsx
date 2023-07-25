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
          src="/images/hbanner.jpg"
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
                <Link href="/family-rooms">
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
              ROOMS
            </h1>
            <h1 className="font-semibold">
              Jackson&#39;s Hotel & Leisure Centre have a range of guest
              bedrooms available. Both in the traditional part of the hotel &
              the new wing.
            </h1>
            <p className="py-4">
              The 4 Star Jackson&#39;s Hotel, Ballybofey boasts over 120 guest
              bedrooms which have been newly refurbished since the beginning of
              2018.
            </p>
            <p className="py-4">
              Jackson&#39;s Hotel is began as a 75 bedroom hotel and has since
              grown to over 120 bedrooms with the addition of the new wing,
              constructed just over 10 years ago. All rooms have been designed
              to a high specification. Bedrooms are equipped with flat screen
              TV&#39;s, tea & coffee making facilities and free Wi-Fi to name
              but a few of the perks
            </p>
            <p className="py-4">
              If it is for a special occasion then why not make your stay a
              memorable one by upgrading to our Executive Suites, with amazing
              views over Drumboe Woods. We have ample rooms for families with
              rooms consisting of anything from a Double and a Single bed to
              having two double beds and two single beds making our rooms ideal
              for those breaks with the children.
            </p>
            <p className="py-4">
              We also have rooms for our disabled guests, which are easily
              accessible from all areas of the Hotel
            </p>
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
