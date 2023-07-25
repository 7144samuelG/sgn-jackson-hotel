"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Header } from "../../components/Header";
import SplidePage from "../../components/SplidePage";
function Garden() {
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
            <h1 className="mb-9 pt-5 text-2xl font-semibold w-[100%] b pb-4">
              THE GARDEN RESTAURANT
            </h1>
            <div>
              <h2 className="tracking-widest font-semibold">
                GARDEN RESTAURANT AT JACKSON&#39;S HOTEL
              </h2>
              <p className="text-sm py-3 ">
                Experience an unforgettable dining experience where the service
                is second to none and the food is freshly prepared with great
                passion and heart. Our Garden Restaurant is a sanctuary for
                passionate food lovers offering a pleasant dining experience
                with beautiful views of the hotel gardens, River Finn and
                Drumboe Woods.
              </p>
              <h2 className="font-semibold pb-6">
                The Garden Restaurant Opening Hours:<span className="font-sm opacity-50">Monday - Sunday - 12.30-9.00pm</span>
              </h2>
              <div className="border-2 border-red-300 my-[60px] opacity-10" />
            </div>
          </div>
        </div>
      </div>
      <SplidePage />
    </div>
  );
}

export default Garden;
