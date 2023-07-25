"use client";
import { Header } from "@/app/components/Header";
import SplidePage from "@/app/components/SplidePage";
import SwiperCarousel from "@/app/components/SwiperCarousel";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
function Dinning() {
  const [open, setIsOpen] = useState<Boolean>(true);
  return (
    <div>
      
      <div className="z-0 h-[300px] border">
        <Image
          src="/images/dinner.png"
          width={400}
          height={200}
          className="w-full h-[500px]"
          alt=""
        />
      </div>
      <div className="mt-[200px] w-[95%] text-left md:w-[80%] lg:w-[70%] mx-auto">
        <div className="grid md:grid-cols-2 items-start ">
          <div className="hidden md:grid">
            <div className="w-[300px] b flex justify-between mb-9 pt-8 pb-4" onClick={()=>setIsOpen(!open)}>
              <h1 className="text-sm ">MENU</h1>
              <FaChevronRight size={10} />
            </div>
          {open&&(
            <div>
            <Link href="/dinning/garden">
            <div className="w-[300px] b pb-4 flex justify-between">
              <h1 className="text-sm ">
                GARDEN RESTAURANT
              </h1>
              <FaChevronRight size={10} />
            </div>
            </Link>
            <Link href="/dinning/fara">
            <div className="w-[300px] b pb-4 pt-4 flex justify-between">
              <h1 className="text-sm ">
                FARAS&#39;S BAR
              </h1>
              <FaChevronRight size={10} />
            </div>
            </Link>
            <Link href="/dinning/thirsty-trout">
            <div className="w-[300px] b pb-4 pt-4 flex justify-between">
              <h1 className="text-sm ">
                THE THIRSTY TROUT
              </h1>
              <FaChevronRight size={10} />
            </div>
            </Link>
            <Link href="/dinning/walled">
            <div className="w-[300px] b pb-4 pt-4 flex justify-between">
              <h1 className="text-sm ">
                  WALLED GARDENS 
              </h1>
              <FaChevronRight size={10} />
            </div>
            </Link>
            </div>
            )}
          </div>

          <div>
            <h1 className="mb-9 pt-5 text-2xl font-semibold w-[100%] b pb-4">
              DINING
            </h1>
            <div>
              <h1>FARA&#39;S BAR AT JACKSON&#39;S HOTEL </h1>
              <p className="text-sm py-3 ">
                A trip to Fara&#39;s Bar is a must when visiting Ballybofey. The
                perfect place to relax and unwind. Featuring a mix of rich brown
                leather and soft tartan furnishings. With the warmer weather en
                route, enjoy drinks & food alfresco in the Walled Gardens
                located next to the bar. All major sporting events are shown on
                our large flat-screens.
              </p>
              <h1 className="tracking-widest">GARDEN RESTAURANT AT JACKSON&#39;S HOTEL</h1>
              <p className="text-sm py-3 ">
                Experience an unforgettable dining experience where the service
                is second to none and the food is freshly prepared with great
                passion and heart. Our Garden Restaurant is a sanctuary for
                passionate food lovers offering a pleasant dining experience
                with beautiful views of the hotel gardens, River Finn and
                Drumboe Woods.
              </p>
              <h2 className="font-semibold pb-6">Food Served 12.30-9.00pm Daily</h2>
              <Link href="/" legacyBehavior>
                <a className="text-2xl font-semibold">VIEW MENU</a>
              </Link>
              <p className="font-bold underline">Please note menu is subject to change without prior notice during certain peiods</p>
              <div className="border-2 border-red-300 my-[60px] opacity-10"/>
            </div>
          </div>
        </div>
        
      </div>
      <SwiperCarousel/>
    </div>
  );
}

export default Dinning;
