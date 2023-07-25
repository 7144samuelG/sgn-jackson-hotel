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
          src="/images/family.jpg"
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
            FAMILY FRIENDLY ROOMS
            </h1>
            <h1 className="font-semibold mb-6">
            Jackson&#39;s Hotel & Leisure Centre is a fantastic family hotel in Donegal. 
            Range of large family rooms for family holidays in Donegal.
            </h1>
            <h5 className="font-semibold ">Family Holidays In Donegal</h5>
            <p className="py-4">
            Voted best Family Hotel by FamilyFirst.ie. Your children will love our spacious rooms with soft beds,
             room to play, large bathtubs and a choice of TV channels.
            </p>
            <p className="py-4">
            We offer a choice of room types including Triple Rooms with 3 single beds and Family Rooms with 1 double bed and 2 single beds. Interconnecting rooms are available, please 
            call our reservations team on 074 913 1021 to reserve.
            </p>
            
            <h1 className="mb-9 pt-5  font-semibold w-[100%] b pb-4">
            Family Friendly Hotel
            </h1>
            <ul className="list-disc marker:text-black mb-8">
              <li className="my-2"> Leisure centre with 22m swimming pool</li>
              <li className="mb-2"> Kids menus in restaurant and bar</li>
              <li className="mb-2">Walled Garden where the little ones can safely run around</li>
             
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
