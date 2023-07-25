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
            <h1 className="mb-9 pt-5 text-2xl font-semibold w-[100%] b pb-4">
              SWIMMING POOL
            </h1>
            <h2 className="font-semibold">
              Swimming Pool At Jacksons Hotel Ballybofey
            </h2>
            <div>
              <p className="text-[1rem] py-3 ">
                Stay fit or relax in our recently refurbished swimming pool. You
                won&#39;t have any trouble keeping the little ones entertained
                when staying at our hotel. Kid&#39;s adore splashing around to
                their heart&#39;s content.
              </p>
              <p className="text-[1rem] py-3 ">
                To make sure everyone enjoys their swim we have dedicated times
                available for both children and serious adult swimmers. Changing
                rooms are available with secure lockers for your belongings
                during your swim.
              </p>
              <h2 className="font-bold py-3">Children Welcome</h2>
              <p className="text-[1rem] py-3 ">
                Our swimming pool is child friendly and we invite the little
                ones to swim up until 6.30pm every day*. We have a dedicated
                family area by the pool with relaxing aqua chairs so you can
                unwind while kids play. *Adults must be present at all times.
                Children under the age of 18 years are not permitted to enter
                the sauna, steam room or Jacuzzi
              </p>
              <h2 className="font-bold py-3">Children Welcome</h2>
              
              <p className="text-[1rem] py-3">
              We run our popular Children&#39;s Swim School on selected dates throughout 
              the year. To make sure your little one enjoys their class we invite you
               to call in for a free water test, making sure your child is booked into 
               the most suitable class. Private swimming lessons are also available
                for adults and children.
               Please contact us on 074 913 2047 for more details.
              </p>
              
            </div>
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
