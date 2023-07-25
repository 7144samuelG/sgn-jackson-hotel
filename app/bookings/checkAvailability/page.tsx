"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector,useDispatch } from "react-redux";
import { singleRIncrement,singleRDecrement } from "@/app/features/counterSlice";
import React, { useState,useEffect } from "react";
import { RootState } from "@/app/store";
const Availability = () => {
  const [state1, setState1] = useState<boolean>(false);
  const [state2, setState2] = useState<boolean>(false);
  const [state3, setState3] = useState<boolean>(true);
  const singleCount=useSelector((state:RootState)=>state.counter.singleR);
  const dispatch=useDispatch();
  const maxValue=5
  return (
    <div className="wrapper2 mt-5 none">
      <div className="w-full md:flex gap-6">
        <div className="w-full md:w-[30%] ">
          <div className="bg-[#fff] p-4 rounded-md ml-3 mt-4">
            <h1 className="text-bold text-xl">BOOKING SUMMARY</h1>
            <div className="flex justify-between">
              <div>
                <h1 className="opacity-70 text-[0.7rem]">CHECK IN</h1>
                <div>
                  <h1 className="text-xl">
                    14 <span>SEP</span>
                  </h1>
                  <h1>
                    THU <span>2023</span>
                  </h1>
                </div>
              </div>
              <div></div>
              <div>
                <h1 className="opacity-70 text-[0.7rem]">CHECK OUT</h1>
                <div>
                  <h1 className="text-xl">
                    14 <span>SEP</span>
                  </h1>
                  <h1>
                    THU <span>2023</span>
                  </h1>
                </div>
              </div>
              <div>
                <h1 className="opacity-70 text-[0.7rem]">NIGHTS </h1>
                <h1>1</h1>
              </div>
            </div>
            <p className="opacity-90">
              Are your dates flexble <input type="checkbox" />
            </p>
          </div>
          <div className="bg-[#fff] p-4 rounded-md ml-3 mt-4 mb-10">
            <h1 className="bold text-xl">Why Book With Us?</h1>
            <ul className="opacity-90 text-sm">
              <li className="mb-2">
                <span></span>Best Price Guarantee
              </li>
              <li className="mb-2">Flexible Cancellation</li>
              <li className="mb-2">No Deposits*</li>
              <li className="">No Booking Fees</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[65%] flex-1 bg-[#fff]">
          <div className=" p-4 rounded-md mr-3 mt-4">
            <div className="flex ">
              <div className="flex flex-1 items-start">
                <Image
                  src="/images/classic.jpg"
                  width={200}
                  height={300}
                  className="rounded-md h-[200px]"
                  alt=""
                />
                <div className="ml-2">
                  <h1 className="font-bold text-2xl">Room Only</h1>

                  <Link href="/" legacyBehavior>
                    <a className="opacity-60">
                      <span></span>View Details
                    </a>
                  </Link>
                </div>
              </div>
              <div>
                <p className="flex justify-end opacity-70">from</p>
                <h1 className="font-bold text-2xl">
                  $84<span>.00</span>
                </h1>
                <p className="flex justify-end opacity-70">total stay</p>
              </div>
            </div>
          </div>
          <div className="border ml-3" />

          {state1 && (
            <div>
              <div className="md:flex py-5 mr-3">
                <h1 className="flex-1  text-xl font-semibold pl-3 ">Single</h1>
                <div className="flex space-x-2 items-center">
                  <h1 className="">
                    $114<span>.00</span>
                    <span className=" pl-2 opacity-60">total stay</span>
                  </h1>
                  <div className="flex">
                    <button className="text-2xl border p-2">-</button>
                    <h1 className="text-2xl border p-2">0</h1>
                    <button className="text-2xl border p-2">+</button>
                  </div>
                </div>
              </div>
              <div className="border ml-3" />
              <div className="md:flex py-5 mr-3">
                <h1 className="flex-1  text-xl font-semibold pl-3 ">
                  Double Room
                </h1>
                <div className="flex space-x-2 items-center">
                  <h1 className="">
                    $114<span>.00</span>
                    <span className=" pl-2 opacity-60">total stay</span>
                  </h1>
                  <div className="flex">
                    <button className="text-2xl border p-2">-</button>
                    <h1 className="text-2xl border p-2">0</h1>
                    <button className="text-2xl border p-2">+</button>
                  </div>
                </div>
              </div>
              <div className="border ml-3" />
              <div className="md:flex py-5 mr-3">
                <h1 className="flex-1  text-xl font-semibold pl-3 ">
                  Twin Room
                </h1>
                <div className="flex space-x-2 items-center">
                  <h1 className=" ">
                    $114<span>.00</span>
                    <span className=" pl-2 opacity-60">total stay</span>
                  </h1>
                  <div className="flex">
                    <button className="text-2xl border p-2" 
                    onClick={()=>dispatch(singleRDecrement())}
                    disabled={singleCount<1}
                    >-</button>
                    <h1 className="text-2xl border p-2">{singleCount}</h1>
                    <button className="text-2xl border p-2" 
                    onClick={()=>dispatch(singleRIncrement())}
                    disabled={singleCount>4}
                    >+</button>
                  </div>
                </div>
              </div>
              <div className="border ml-3" />
              <div className="md:flex py-5 mr-3">
                <h1 className="flex-1  text-xl font-semibold pl-3 ">
                  Tripple Room
                </h1>
                <div className="flex space-x-2 items-center">
                  <h1 className="">
                    $114<span>.00</span>
                    <span className=" pl-2 opacity-60">total stay</span>
                  </h1>
                  <div className="flex">
                    <button className="text-2xl border p-2">-</button>
                    <h1 className="text-2xl border p-2">0</h1>
                    <button className="text-2xl border p-2">+</button>
                  </div>
                </div>
              </div>
              <div className="border ml-3" />
              <div className="md:flex py-5 mr-3">
                <h1 className="flex-1  text-xl font-semibold pl-3 ">
                  Family Room
                </h1>
                <div className="flex space-x-2 items-center">
                  <h1 className="">
                    $114<span>.00</span>
                    <span className="pl-2 opacity-60">total stay</span>
                  </h1>
                  <div className="flex">
                    <button className="text-2xl border p-2">-</button>
                    <h1 className="text-2xl border p-2">0</h1>
                    <button className="text-2xl border p-2">+</button>
                  </div>
                </div>
              </div>
              <div className="border ml-3" />
            </div>
          )}
          <div
            className="text-center cursor-pointer text-[rgb(12,49,67)]"
            onClick={() => setState1(!state1)}
          >
            {state1 ? `Hide Available Rooms` : `View Available Rooms`}
          </div>

          <div className=" p-4 rounded-md mr-3 mt-4">
            <div className="flex ">
              <div className="flex flex-1 items-start">
                <Image
                  src="/images/classic.jpg"
                  width={200}
                  height={300}
                  className="rounded-md h-[200px]"
                  alt=""
                />
                <div className="ml-2">
                  <h1 className="font-bold text-2xl">Bed & Breakfast</h1>

                  <Link href="/" legacyBehavior>
                    <a className="opacity-60">
                      <span></span>View Details
                    </a>
                  </Link>
                </div>
              </div>
              <div>
                <p className="flex justify-end opacity-70">from</p>
                <h1 className="font-bold text-2xl">
                  $84<span>.00</span>
                </h1>
                <p className="flex justify-end opacity-70">total stay</p>
              </div>
            </div>
          </div>
          <div className="border ml-3" />
          {state2 && (
            <div>
              <div className="md:flex py-5 mr-3">
                <h1 className="flex-1  text-xl font-semibold pl-3 ">Single</h1>
                <div className="flex space-x-2 items-center">
                  <h1 className="">
                    $124<span>.00</span>
                    <span className=" pl-2 opacity-60">total stay</span>
                  </h1>
                  <div className="flex">
                    <button className="text-2xl border p-2">-</button>
                    <h1 className="text-2xl border p-2">0</h1>
                    <button className="text-2xl border p-2">+</button>
                  </div>
                </div>
              </div>
              <div className="border ml-3" />
              <div className="md:flex py-5 mr-3">
                <h1 className="flex-1  text-xl font-semibold pl-3 ">
                  Double Room
                </h1>
                <div className="flex space-x-2 items-center">
                  <h1 className="">
                    $129<span>.00</span>
                    <span className=" pl-2 opacity-60">total stay</span>
                  </h1>
                  <div className="flex">
                    <button className="text-2xl border p-2">-</button>
                    <h1 className="text-2xl border p-2">0</h1>
                    <button className="text-2xl border p-2">+</button>
                  </div>
                </div>
              </div>
              <div className="border ml-3" />
              <div className="md:flex py-5 mr-3">
                <h1 className="flex-1  text-xl font-semibold pl-3 ">
                  Twin Room
                </h1>
                <div className="flex space-x-2 items-center">
                  <h1 className=" ">
                    $129<span>.00</span>
                    <span className=" pl-2 opacity-60">total stay</span>
                  </h1>
                  <div className="flex">
                    <button className="text-2xl border p-2">-</button>
                    <h1 className="text-2xl border p-2">0</h1>
                    <button className="text-2xl border p-2">+</button>
                  </div>
                </div>
              </div>
              <div className="border ml-3" />
              <div className="md:flex py-5 mr-3">
                <h1 className="flex-1  text-xl font-semibold pl-3 ">
                  Tripple Room
                </h1>
                <div className="flex space-x-2 items-center">
                  <h1 className="">
                    $159<span>.00</span>
                    <span className=" pl-2 opacity-60">total stay</span>
                  </h1>
                  <div className="flex">
                    <button className="text-2xl border p-2">-</button>
                    <h1 className="text-2xl border p-2">0</h1>
                    <button className="text-2xl border p-2">+</button>
                  </div>
                </div>
              </div>
              <div className="border ml-3" />
              <div className="md:flex py-5 mr-3">
                <h1 className="flex-1  text-xl font-semibold pl-3 ">
                  Family Room
                </h1>
                <div className="flex space-x-2 items-center">
                  <h1 className="">
                    $159<span>.00</span>
                    <span className="pl-2 opacity-60">total stay</span>
                  </h1>
                  <div className="flex">
                    <button className="text-2xl border p-2">-</button>
                    <h1 className="text-2xl border p-2">0</h1>
                    <button className="text-2xl border p-2">+</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div
            className="text-center cursor-pointer text-[rgb(12,49,67)]"
            onClick={() => setState2(!state2)}
          >
            {state1 ? `Hide Available Rooms` : `View Available Rooms`}
          </div>
          

          <div className=" p-4 rounded-md mr-3 mt-4">
            <div className="flex ">
              <div className="flex flex-1 items-start">
                <Image
                  src="/images/im4.jpg"
                  width={200}
                  height={300}
                  className="rounded-md h-[200px]"
                  alt=""
                />
                <div className="ml-2">
                  <h1 className="font-bold text-2xl">
                    Couples Date Night | Breakfast & Main Course
                  </h1>

                  <Link href="/" legacyBehavior>
                    <a className="opacity-60">
                      <span></span>View Details
                    </a>
                  </Link>
                </div>
              </div>
              <div>
                <p className="flex justify-end opacity-70">from</p>
                <h1 className="font-bold text-2xl">
                  $165<span>.00</span>
                </h1>
                <p className="flex justify-end opacity-70">total stay</p>
              </div>
            </div>
          </div>
          <div className="border ml-3" />
          <div className="md:flex py-5 mr-3">
            <h1 className="flex-1  text-xl font-semibold pl-3 ">Double Room</h1>
            <div className="flex space-x-2 items-center">
              <h1 className="">
                $165<span>.00</span>
                <span className=" pl-2 opacity-60">total stay</span>
              </h1>
              <div className="flex">
                <button className="text-2xl border p-2">-</button>
                <h1 className="text-2xl border p-2">0</h1>
                <button className="text-2xl border p-2">+</button>
              </div>
            </div>
          </div>
          <div className="border ml-3" />
          <div className="md:flex py-5 mr-3">
            <h1 className="flex-1  text-xl font-semibold pl-3 ">Twin Room</h1>
            <div className="flex space-x-2 items-center">
              <h1 className=" ">
                $165<span>.00</span>
                <span className=" pl-2 opacity-60">total stay</span>
              </h1>
              <div className="flex">
                <button className="text-2xl border p-2">-</button>
                <h1 className="text-2xl border p-2">0</h1>
                <button className="text-2xl border p-2">+</button>
              </div>
            </div>
          </div>
          <div className="border ml-3" />
        </div>
      </div>
    </div>
  );
};

export default  Availability;
