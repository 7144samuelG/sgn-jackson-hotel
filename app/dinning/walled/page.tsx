"use client";
import DarkVariantExample from "@/app/components/GardenCarousel";
import { Header } from "@/app/components/Header";
import SplidePage from "@/app/components/SplidePage";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
function Thirsty() {
  const [open, setIsOpen] = useState<Boolean>(true);
  return (
    <div>
      
      <div className="z-0 h-[300px] border">
        <Image
          src="/images/g2.jpg"
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
                <Link href="/dinning/garden">
                  <div className="w-[300px] b pb-4 flex justify-between">
                    <h1 className="text-sm ">GARDEN RESTAURANT</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/dinning/fara">
                  <div className="w-[300px] b pb-4 pt-4 flex justify-between">
                    <h1 className="text-sm ">FAAR&#39;S BAR</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/dinning/thirsty-trout">
                  <div className="w-[300px] b pb-4 pt-4 flex justify-between">
                    <h1 className="text-sm ">THE THIRSTY TROUT</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
                <Link href="/dinning/walled">
                  <div className="w-[300px] b pb-4 pt-4 flex justify-between">
                    <h1 className="text-sm ">WALLED GARDENS</h1>
                    <FaChevronRight size={10} />
                  </div>
                </Link>
              </div>
            )}
          </div>

          <div>
            <h1 className="mb-9 pt-5 text-3xl font-semibold w-[100%]">
            WALLED GARDENS
            </h1>
            <div>
              <p className="text-sm pb-3 ">
              Take a step back in time at Donegal&#39;s newest old bar.
               Serving the finest traditional ales, spirtit and whiskeys from around the globe.
               Each wall of the Thirsty Trout portrays some the of well known people of the Twin
                Towns..each photograph tells a different story. Since ownership of Jackson&#39;s Hotel changed in 2017, the Gallen family, are stubbornly proud of the Thirsty Trouts history and authenticity. The busy interior, with its portraits, posters, paraphernalia, stove fire 
              and rustic floor, it pretty much is a true Irish traditional pub. 
              </p>
              <p className="text-sm py-3">
              Retreat into nature in our beautiful Walled Gardens. The perfect spot to soak up the sun while enjoying refreshing drinks or delicious food. Food & drink is served from  Bar.
              </p>
              <Image src="/images/im4.jpg" width={400} height={400} alt='' className="w-full"/>
              <div className="border-2 border-red-300 my-[60px] opacity-10" />
            </div>
          </div>
        </div>
      </div>
      <SplidePage />
    </div>
  );
}

export default Thirsty;
