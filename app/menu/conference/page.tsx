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
                <Link href="/">
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

          <div>
            <h1 className="mb-9 pt-5 text-2xl font-semibold w-[100%] b pb-4">
              MEETINGS & CONFERENCES
            </h1>
            <div>
              <p className="text-sm py-3 ">
                Overlooking Drumboe Woods, our facilities have the perfect
                backdrop for all your needs. Whether you are looking for
                mouth-watering food in one of our restaurants or catering within
                an event, out highly skilled team are on hand to provide the
                best that Donegal has to offer. ​We believe in offering an
                exceptional experience to all of our guests. Incorporating that
                with our dedicated, warm & friendly staff, we offer an
                unparalleled experience than any other.
              </p>

              <p className="text-sm py-3">
                We are one of the largest event venues in the north west of
                Ireland, offering state of the art facilities and are
                conveniently located on the N15, with easy access of all major
                road networks, Donegal and Derry airports.
              </p>
              <p className="text-sm py-3">
                Be it an important conference, a special wedding, family
                gatherings, fashion shows, dance competitions, gala dinners or
                award ceremonies, Jackson&#39;s Hotel has the ideal event space
                to suit your requirements.
              </p>
              <h2 className="font-semibold  text-2xl pb-6">We Offer:</h2>
              <div>
                <ul className="list-disc marker:text-black ">
                  <li className="my-2">3 Large Function Suites</li>
                  <li className="mb-2">3 6 Meeting Rooms</li>
                  <li className="mb-2">Dedicated Bar & Banqueting Areas</li>
                  <li className="mb-2">
                    Rooms & Suites suitable from 2 to 2,000 guests
                  </li>
                  <li className="mb-2">Natural Daylight</li>
                  <li className="mb-2">Blackout Facilities</li>
                  <li className="mb-2">All Layout Styles Available</li>
                  <li className="mb-2">Light & Air conditioning Control</li>
                  <li className="mb-10">Wheelchair Access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[90%] lg:w-[80%] mx-auto">

      <SwiperCarousel />
      </div>
    </div>
  );
}

export default Conference;
