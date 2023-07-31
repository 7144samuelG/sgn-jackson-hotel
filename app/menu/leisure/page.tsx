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
                <Link href="/leisure/swimming-pool">
                  <div className="w-[300px] b pb-4 flex justify-between">
                    <h1 className="text-sm ">SWIMMING POOL</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/leisure/our-gym">
                  <div className="w-[300px] b pb-4 pt-4 flex justify-between">
                    <h1 className="text-sm ">OUR GYM</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/leisure/membership">
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
              LEISURE
            </h1>
            <div>
              <p className="text-[1rem] py-3 ">
                Jackson&#39;s Leisure Centre has a 22 metre heated swimming
                pool, gym & leisure facilities. When you are finished your work
                out or session, spend some time relaxing in the jacuzzi, sauna &
                steamroom. Add to your wellbeing or workout by taking a walk or
                jog through Drumboe Woods & the River Finn which is overlooked
                by the Leisure Centre.
              </p>
              <p className="text-[1rem] py-3 ">
                Our team of staff are always on hand to encourage and to give
                advice so that you can keep on track with your personal fitness
                and health goals. All hotel residents can enjoy complimentary
                use of Jackson&#39;s Leisure. Whether you want to relax by the
                22 metre swimming pool, grab a sauna or do a light workout,
                Jackson&#39;s Leisure Centre has it all.
              </p>
              <h2 className="text-[1.5rem] py-5 font-semibold">
                Opening hours:
              </h2>
              <p className="text-[1rem] py-3">
                Monday to Friday 7:00am to 9:00pm
              </p>
              <p className="text-[1rem] py-3">
                Saturday,Sunday and Bank Holidays 9.00am to 7.00pm
              </p>
              
            </div>
          </div>
        </div>
        <div className="mt-5">
                <SwiperCarousel/>
              </div>
      </div>
      
    </div>
  );
}

export default Leisure;
