"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Header } from "../../components/Header";
import SplidePage from "../../components/SplidePage";
function Fara() {
  const [open, setIsOpen] = useState<Boolean>(true);
  return (
    <div>
      
      <div className="z-0 h-[300px] border">
        <Image
          src="/images/im4.jpg"
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
              FARA&#39;S BAR
            </h1>
            <div>
              <p className="text-sm pb-3 ">
                A trip to the newly refurbished Fara&#39;s Bar is a must when
                vising Ballybofey. The perfect place to relax and unwind.
              </p>
              <p className="text-sm py-3 ">
                Featuring a mix of rich brown leather and soft tartan
                furnishings.
              </p>
              <p className="text-sm py-3 ">
                With the warmer weather en route, enjoy drinks & food alfresco
                in the Walled Gardens located next to the bar.
              </p>
              <p className="text-sm py-3">
                All major sporting events are shown on our large flat-screens.
              </p>
              <h2 className="font-semibold pb-6">Food Served:</h2>
              <h2 className="font-semibold pb-6">Monday - Sunday - 12.30-9.00pm</h2>
              <div className="border-2 border-red-300 my-[60px] opacity-10" />
            </div>
          </div>
        </div>
      </div>
      <SplidePage />
    </div>
  );
}

export default Fara;
