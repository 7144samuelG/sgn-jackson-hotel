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
              MEETINGS FACILITIES
            </h1>
            <div>
              <p className="text-[1rem] py-3 ">
                All our rooms offer a great degree of flexibility and several
                different room layouts are available, including theatre style
                for up to 60, boardroom up to 35 and classroom up to 30 people.
              </p>

              <p className="text-sm py-3">
                All meeting rooms at Jackson&#39;s Hotel are equipped with state
                of the art technical services such as AV, presentation equipment
                and Wi-Fi, along with lighting controls and blackout facilities.
              </p>
              <p className="text-sm py-3">
                We have capacity to suit all types of events, from interviews
                and small corporate meetings to large conferenes and product
                launches. Our Finn suite is flexible and can divide and
                partition being suitable for any event set up.
              </p>
              <h1 className="mb-9 pt-5 text-[2rem] font-semibold w-[100%] b pb-4">
                FINN SUITE
              </h1>
              <p className="text-sm py-3">
                The Finn Suite is our largest function room and is located in
                the new wing of the hotel, it includes a private entrance that
                leads into a large foyer. The sweeping staircase guides you up
                into the Finn Suite along with lift access. This large
                self-contained suite has everything you need to hold the perfect
                event with private reception areas, bar, staging
              </p>
              <Image
                src="/images/finn-details.jpg"
                width={100}
                height={300}
                className="w-full h- object-contain"
                alt=""
              />
              <Image
                src="/images/boardroom-web.png"
                width={100}
                height={300}
                className="w-full h-full"
                alt=""
              />
              <h1 className="mb-9 pt-5 text-[2rem] font-semibold w-[100%] b pb-4">
                PYRAMID SUITE
              </h1>
              <p className="text-sm py-3">
                Located on the ground floor level in the original part of the
                hotel, the Pyramid suite has been recently renovated with lavish
                ceiling drapes and large chandelier. Entrance to the Pyramid
                suite is through the main hotel entrance and through the lobby.
                With sunken dance floor, stage and private bar the Pyramid suite
                offers exceptional facilities for your event. Leading from the
                Pyramid suite is a private roofed balcony
              </p>
              <Image
                src="/images/finn-details.jpg"
                width={100}
                height={300}
                className="w-full h- object-contain"
                alt=""
              />
              <h1 className="mb-9 pt-5 text-[2rem] font-semibold w-[100%] b pb-4">
              DRUMBOE SUITE
              </h1>
              <p className="text-sm py-3">
              Located in the original part of Jackson&#39;s Hotel on the ground floor,
               the Drumboe suite is ideal for smaller events or as a break out room. 
               Entrance to the Drumboe suite is through the main hotel entrance and off 
               from the lobby area. This self contained event
               suite has its own private bar and ample equipment to cater to any event.
              </p>
              <Image
                src="/images/finn-details.jpg"
                width={100}
                height={300}
                className="w-full h- object-contain"
                alt=""
              />
              <h1 className="mb-9 pt-5 text-[2rem] font-semibold w-[100%] b pb-4">
              MEETING & BOARD ROOMS
              </h1>
              <p className="text-sm py-3">
              Choice of 3 meeting & board rooms located on the first floor of the
               original building at Jackson&#39;s Hotel. These rooms
               are ideal for smaller events, meetings, interviews or focus groups.
              </p>
              <Image
                src="/images/finn-details.jpg"
                width={100}
                height={300}
                className="w-full h- object-contain"
                alt=""
              />
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conference;
