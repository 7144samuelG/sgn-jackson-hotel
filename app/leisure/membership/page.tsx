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
          src="/images/le.png"
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
                <Link href="/">
                  <div className="w-[300px] b pb-4 flex justify-between">
                    <h1 className="text-sm ">SWIMMING POOL</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/">
                  <div className="w-[300px] b pb-4 pt-4 flex justify-between">
                    <h1 className="text-sm ">OUR GYM</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/">
                  <div className="w-[300px] b pb-4 pt-4 flex justify-between">
                    <h1 className="text-sm ">MEMBERSHIP</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
              </div>
            )}
          </div>

          <div>
            <h1 className="mb-9 pt-5 text-3xl font-semibold w-[100%] b pb-4">
            GYM & POOL MEMBERSHIP
            </h1>
            <h1 className="mb-9 pt-5 text-2xl font-semibold w-[100%] b pb-4">
            PRICE LIST {new Date().getFullYear()}
            </h1>
            <Image src="/images/pricelist.jpg" width={501} height={709} alt='' className="w-full md:w-[501px]"/>
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
