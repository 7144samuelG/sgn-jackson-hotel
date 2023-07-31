"use client"
import Image from "next/image";
import { Offers } from "./components/Offers";
import { Footer } from "./components/Footer";
import { FaChevronDown } from "react-icons/fa";
import SplideCarousel from "./components/Carousel2";
import { Carousell } from "./components/Carousel";
import React, { useState } from "react";
import WeddingLinks1 from "./components/WeddingLinks1";
import SwiperCarousel from "./components/SwiperCarousel";
import DatePicker from "react-date-picker";
//import DatePicker from "react-datepicker";
import moment from "moment";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Link from "next/link";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home() {
  const [value, onChange] = useState<Value>(new Date());
  const [bookActive,setBookActive]=useState<boolean>(false)
  return (
    <main className="mb-[50px]">
      
      {/* <div className="absolute right-0 left-0  mt-[-100px] bg-white z-10 wrapper2">

      <div className="input-container flex items-center">
     
      <div>
        <label>Check-in</label>
        
        <DatePicker  minDate={new Date()} closeCalendar={false} onChange={onChange} value={value} />
      </div>
      <div className="flex-1">
        <label>Check-out</label>
        
        <DatePicker  minDate={new Date()} closeCalendar={false} onChange={onChange} value={value} />
      </div>
      <div className="py-2 bg-[#060313] w-[150px]">
          <Link href="/bookings/checkAvailability">
            <h1 className="w-full text-center text-xl text-white ">SEARCH</h1>
          </Link>
        </div>
      </div>
    </div> */}
      <video  autoPlay muted loop src="/images/lux.mp4"
      className="w-full h-[300px] lg:h-[500px] mt-[10] lg:mt-[100px]object-cover lg:object-contain"/>
      <div className="lg:mt-[70px]">
        <h1 className="text-center text-3xl">AT JACKSONS HOTEL, DONEGAL</h1>
        <h5 className="mt-[40px] mb-[10px] text-center">Welcome to Jacksons</h5>
        <p className="text-center w-[95%] md:w-[82%] mx-auto">
          A 4-star, family-run hotel located in Ballybofey on the scenic
          backdrop of the River Finn & Drumboe Woods. Relax in our stunning
          gardens, wine & dine in the atmospheric Faras Bar or soak up the
          hospitality in our traditional Irish bar, the Thirsty Trout. A Gallen
          Hospitality Hotel, we have been owned by the Gallen Family since the
          beginning of 2017. In that time the hotel has undergone an extensive
          refurbishment programme. The Gallen Hospitality Group
        </p>
        <div className="flex flex-col items-center mt-[20px] mb-[60px] opacity-70">
           <FaChevronDown />{/*
          <p>READ MORE</p> */}
        </div>
      </div>
      <WeddingLinks1/>
      <div className="mt-5 w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
        <h1 className="text-center text-3xl py-3">CURRENT OFFFERS</h1>
        <SwiperCarousel/>
      </div>
      
    </main>
  );
}
