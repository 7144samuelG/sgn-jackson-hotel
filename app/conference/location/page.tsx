"use client";
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
      
      <div className="z-0 h-[300px] border">
        <Image
          src="/images/conf.jpg"
          width={400}
          height={200}
          className="w-full h-[500px]"
          alt=""
        />
      </div>
      <div className="mt-[200px] w-[95%] text-left md:w-[80%] lg:w-[70%] mx-auto">
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
                <Link href="/conference/facilities">
                  <div className="w-[300px] b pb-4 flex justify-between">
                    <h1 className="text-sm ">FACILITIES</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/conference/location">
                  <div className="w-[300px] b pb-4 pt-4 flex justify-between">
                    <h1 className="text-sm ">LOCATION</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/conference/donegal">
                  <div className="w-[300px] b pb-4 pt-4 flex justify-between">
                    <h1 className="text-sm ">WHY DONEGAL?</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/meeting-enquiry">
                  <div className="w-[300px] b pb-4 pt-4 flex justify-between">
                    <h1 className="text-sm ">MEETING ENQUIRY</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/conference/leisure">
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
              LOCATION
            </h1>
            <div>
              <p className="text-[1rem] py-3 ">
                Getting to Villa Rose and Jackson&#39s Hotel couldnt be easier
                for you and your delegates. Our Hotels are located in the Heart
                of Donegai,Ballybofey.The gateway town to the North West.We are
                in an ideal location to explore all that Donegai has to offer
                with blu flag beaches award winng golf courses and 3 Wild
                Atlantic way signatures
              </p>
              <p className="text-[1rem] py-3 ">
                Easily accessible on National Primary Route N15,Linked with all major Motorways and Airport,
                Dublin,Belfast,Derry,Galway,Ireland West Knock Airport and Donegai Airport.Complimentary onsite parking is available
                and can host over 320 vehicles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conference;
