"use client";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  ArrowsPointingOutIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
export default function SwiperCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 2,
          },
        }}
        navigation={true}
        modules={[Keyboard, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link href="/bookings/package1" legacyBehavior>
            <a className="text-[#0c3143]">
              <div className="relative">
                <Image
                  src="/images/j3.jpg"
                  width={400}
                  className="w-full"
                  height={300}
                  alt=""
                />
                <div className="absolute min-h-[160px] z-2 bottom-0 text-white w-full">
                  <h4 className="font-semibold text-[2.25rem] mb-[10px] slt">
                    50+ Getaways
                  </h4>
                  <div className="flex justify-between w-[80%] mx-auto">
                    <h4 className=" text-[24px]  bottom-[25px] ">Book Now</h4>
                    <ArrowLongRightIcon className="w-10" />
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link href="/bookings/package3" legacyBehavior>
        <a className="text-[#0c3143]">
              <div className="relative">
                <Image
                  src="/images/j1.jpg"
                  width={400}
                  className="w-full"
                  height={300}
                  alt=""
                />
                <div className="absolute min-h-[160px] z-2 bottom-0 text-white w-full">
                  <h4 className="font-semibold text-[2.25rem] mb-[10px] slt">
                    DATE NIGHT
                  </h4>
                  <div className="flex justify-between w-[80%] mx-auto">
                    <h4 className=" text-[24px]  bottom-[25px] ">From $135</h4>
                    <ArrowLongRightIcon className="w-10" />
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/bookings/package2" legacyBehavior>
        <a className="text-[#0c3143]">
              <div className="relative">
                <Image
                  src="/images/j2.jpg"
                  width={400}
                  className="w-full"
                  height={300}
                  alt=""
                />
                <div className="absolute min-h-[160px] z-2 bottom-0 text-white w-full">
                  <h4 className="font-semibold text-[2.25rem] mb-[10px] slt">
                    FAMILY BREAKS
                  </h4>
                  <div className="flex justify-between w-[80%] mx-auto">
                    <h4 className=" text-[24px]  bottom-[25px] ">From $250</h4>
                    <ArrowLongRightIcon className="w-10" />
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
