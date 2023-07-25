"use client";
import Family from "@/app/components/Family";
import DarkVariantExample from "@/app/components/GardenCarousel";
import { Header } from "@/app/components/Header";
import SplidePage from "@/app/components/SplidePage";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
type imageType = {
  imageName: string;
};
function FamilyBreak() {
  const [open, setIsOpen] = useState<Boolean>(true);
  return (
    <div>
      
      <div className="z-0 h-[300px] border">
        <Image
          src="/images/break.jpg"
          width={400}
          height={200}
          className="w-full h-[500px]"
          alt=""
        />
      </div>
      <div className="mt-[200px] w-[95%] text-left md:w-[90%] mx-auto wrapper mb-3">
        <h1 className="my-7 text-[3rem]  text-center">
          {" "}
          JACKSON&#39;S HOTEL GALLERY
        </h1>
        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3 ">
            <Link href="/gallery/trout_05.jpg">
              <div className="hover:bg-[#333] hover:opacity-20  hover:text-[#0c3143]">
                <Image
                  width={400}
                  height={400}
                  alt=""
                  src="/images/trout_05.jpg"
                  className=" h-[175px] md:h-[280px] max-w-full rounded-sm"
                />
              </div>
            </Link>
            <Link href="/gallery/trout_03.jpg">
              <div className="hover:bg-[#333] hover:opacity-20  hover:text-[#0c3143]">
                <Image
                  width={400}
                  height={400}
                  alt=""
                  src="/images/trout_03.jpg"
                  className="h-[175px] md:h-[280px] max-w-full rounded-sm"
                />
              </div>
            </Link>
            <Link href="/gallery/trout_02.jpg">
              <div className="hover:bg-[#333] hover:opacity-20  hover:text-[#0c3143]">
                <Image
                  width={400}
                  height={400}
                  alt=""
                  src="/images/trout_02.jpg"
                  className="h-[175px] md:h-[280px] max-w-full rounded-sm"
                />
              </div>
            </Link>
            <Link href="/gallery/pool_01.jpg">
              <div className="hover:bg-[#333] hover:opacity-20  hover:text-[#0c3143]">
                <Image
                  width={400}
                  height={400}
                  alt=""
                  src="/images/pool_01.jpg"
                  className="h-[175px] md:h-[280px] max-w-full rounded-sm"
                />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
            <Link href="/gallery/garden_01.jpg">
              <div className="hover:bg-[#333] hover:opacity-20  hover:text-[#0c3143]">
                <Image
                  width={400}
                  height={400}
                  alt=""
                  src="/images/garden_01.jpg"
                  className="h-[175px] md:h-[280px] max-w-full rounded-sm"
                />
              </div>
            </Link>
            <Link href="/gallery/pool_02.jpg">
              <div className="hover:bg-[#333] hover:opacity-20  hover:text-[#0c3143]">
                <Image
                  width={400}
                  height={400}
                  alt=""
                  src="/images/pool_02.jpg"
                  className="h-[175px] md:h-[280px] max-w-full rounded-sm"
                />
              </div>
            </Link>
            <Link href="/gallery/pool_02.jpg">
              <div className="hover:bg-[#333] hover:opacity-20  hover:text-[#0c3143]">
                <Image
                  width={400}
                  height={400}
                  alt=""
                  src="/images/food_01.jpg"
                  className="h-[175px] md:h-[280px] max-w-full rounded-sm"
                />
              </div>
            </Link>
            <Link href="/gallery/food_02.jpg">
              <div className="hover:bg-[#333] hover:opacity-20  hover:text-[#0c3143]">
                <Image
                  width={400}
                  height={400}
                  alt=""
                  src="/images/food_02.jpg"
                  className="h-[175px] md:h-[280px] max-w-full rounded-sm"
                />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
            <Link href="/gallery/garden_02.jpg">
              <div className="hover:bg-[#333] hover:opacity-20  hover:text-[#0c3143]">
                <Image
                  width={400}
                  height={400}
                  alt=""
                  src="/images/garden_02.jpg"
                  className="h-[175px] md:h-[280px] max-w-full rounded-sm"
                />
              </div>
            </Link>
            <Link href="/gallery/garden_02.jpg">
              <div className="hover:bg-[#333] hover:opacity-20  hover:text-[#0c3143]">
                <Image
                  width={400}
                  height={400}
                  alt=""
                  src="/images/pool_03.jpg"
                  className="h-[175px] md:h-[280px] max-w-full rounded-sm"
                />
              </div>
            </Link>
            <Link href="/gallery/trout_01.jpg">
              <div className="hover:bg-[#333] hover:opacity-20  hover:text-[#0c3143]">
                <Image
                  width={400}
                  height={400}
                  alt=""
                  src="/images/trout_01.jpg"
                  className="h-[175px] md:h-[280px] max-w-full rounded-sm"
                />
              </div>
            </Link>
            <Link href="/gallery/foyer_01.jpg">
              <div className="hover:bg-[#333] hover:opacity-20  hover:text-[#0c3143]">
                <Image
                  width={400}
                  height={400}
                  alt=""
                  src="/images/foyer_01.jpg"
                  className="h-[175px] md:h-[280px] max-w-full rounded-sm"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilyBreak;
