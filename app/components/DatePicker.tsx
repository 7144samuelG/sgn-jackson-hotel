import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import DatePicker from "react-date-picker";
//import DatePicker from "react-datepicker";
import moment from "moment";
//import "react-datepicker/dist/react-datepicker.css";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const DatePicker2 = () => {
  const router=useRouter();
  const [date, setDate] = useState<any>(new Date());
  const [value, onChange] = useState<Value>(new Date());
  console.log(date);
  const days=[
    "sunday","monday","tuesday","thursday","friday","saturday","sunday"
  ]
  const months=[
    "January","February","March","April","May","June","July","August","September","Octomber","November","December"
  ]
  const month=months[date.getMonth()]
  const day=days[date.getDay()];
  console.log(day);
  const dateInput=()=>{
    
  }
  return (
    <div>
      <div className="w-[50%] rounded overflow-hidden mt-[40px] p-5 
      shadow-lg text-white bg-[#272727] relative">
        <Image
          width={400}
          height={400}
          className="w-full"
          src="/logo.png"
          alt=""
        />
        <div className="absolute top-0 right-0 mr-3 cursor-pointer  " onClick={()=>router.push("/")}>X</div>
        <div className="px-6 py-4">
          <div className="font-medium text-sm mb-2 py-3 text-center">
            BOOK YOUR STAY
          </div>
          <div className="flex justify-center gap-1 input-container ">
            <div className="border border-white p-3">
            
                <h4 className="border-b">check out</h4>
                <div>
                
                <DatePicker  minDate={new Date()} closeCalendar={false} onChange={onChange} value={value} />
                </div>
               
              
            </div>
            <div className="border border-white p-3 cursor-pointer mr-2">
              
                <h4 className="border-b">check out</h4>
                
                <div className="">
                <DatePicker  minDate={new Date()} closeCalendar={false} onChange={onChange} value={value} />
                </div>
             
            </div>
          </div>
        </div>
        <div className="py-3 bg-[#060313]">
          <Link href="/">
            <h1 className="w-full text-center text-xl ">SEARCH</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DatePicker2;
