"use client";
import React, { useEffect, useState } from "react";
import { FaBars, FaCalendarCheck } from "react-icons/fa";
import Image from "next/image";
import Example from "./Menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DatePicker from "react-date-picker";
//import DatePicker from "react-datepicker";
import moment from "moment"
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
type ValuePiece = any| null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

//h-[60px]
export const Header = () => {
  const router=useRouter();
  const [active, setActive] = useState<boolean>(false);
  const [bookActive,setBookActive]=useState<boolean>(false)
  const [value, onChange] = useState<Value>( new Date());
  const [value2, onChange2] = useState<Value>(new Date());
  const days=value2?.getTime()-value?.getTime();
  
  useEffect(()=>{
    var days_book=days/(1000*3600*24);
    if(days_book===0||"0"){
      days_book=1
    }
  },[value2,value,days])
  const searchFunction=(): void=>{
    //router.push({
    //   pathname = "bookings/checkAvailability",
    //   query: {
    //     startDate: value.toISOString() as String,
    //     endDate: value2.toISOString() as String,
    //   },
      
    // })
  }
  return (
    <div
      className="wrapper px-4 pt-5 flex
     justify-between items-center right-0 left-0 top-[100px] z-10 "
      onLoad={() => setActive(false)
     
      }
    >
      <div
        className=" flex items-center w-[120px] md:w-[150px] cursor-pointer
         space-x-2 text-center justify-center border-red-500 bg-white" onClick={() => setActive(!active)}
      >
        <FaBars className="w-7 md:w-15 " />
        <h1 >MENU</h1>
        
       </div>
       {
        active&&(
       <div className="header__menu has-fade text-red-700 mb-[100px]">
        <a href="/">HOME</a>
        <a href="/menu/family-breaks">SUMMER FAMILY BREAKS</a>
        <a href="/menu/dinning">DINNING</a>
        <a href="/menu/wedding">WEDDINGS</a>
        <a href="/menu/conference">CONFERENCING</a>
        <a href="/conference/donegal">EXPLORE DONEGAL</a>
        <a href="/menu/leisure">LEISURE</a>
        <a href="/gallery">GALLERY</a>
      </div>

        )
       }
      
      <Image
        src="/logo.png"
        width={200}
        height={200}
        className="w-[60px] md:w-[200px]"
        alt="logo"
      />
      <div className="flex items-center bg-white w-[120px] md:w-[150px] h-[60px] cursor-pointer" onLoad={() => setBookActive(false)}
       onClick={()=>setBookActive(!bookActive)} >
        <FaCalendarCheck className="w-7 md:w-15" />
        <h1 className="">BOOK NOW</h1>
        </div>
        <div className="absolute right-0 left-0  mt-[135px] bg-white z-10 wrapper2">
{bookActive &&(
<div className="input-container md:flex items- mx-3 nr bg-white">

<div className="mb-3  rounded-sm">
  <label className="pr-4">Check-in</label>
  
  <DatePicker  minDate={new Date()} closeCalendar={false} onChange={onChange} value={value} />
</div>
<div className="flex-1 mb-3">
  <label className="pr-3">Check-out</label>
  
  <DatePicker  minDate={new Date()} closeCalendar={false} onChange={onChange2} value={value2} />
</div>
<div className="py-2 bg-[#0e394f] w-[150px] nr" onClick={()=>setBookActive(false)}>
     <Link href={{
      pathname:"/bookings/checkAvailability/value/value2",
     query:{
       startDate: value?.toString(),
      endDate:value2?.toString(),
    
     }
     }}> 
      <h1 className="w-full text-center text-xl text-white rounded-md ">SEARCH</h1>
    </Link>
  </div>
</div>
)}
</div>
      
      
    </div>
  );
};
// onClick={searchFunction}