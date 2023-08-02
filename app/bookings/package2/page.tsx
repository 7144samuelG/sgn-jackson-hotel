"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  singleRIncrement,
  singleRDecrement,
} from "@/app/features/counterSlice";
import React, { useState, useEffect } from "react";
import { RootState } from "@/app/store";
import DatePicker from "react-date-picker";
//import DatePicker from "react-datepicker";
import moment from "moment";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useForm, SubmitHandler } from "react-hook-form";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
type Inputs = {
  email: string;
  firstName: string;
  lastName: string;
};

const Availability = () => {
  const [value, onChange] = useState<Value>( new Date());
  const [value2, onChange2] = useState<Value>(new Date());
  const singleCount = useSelector((state: RootState) => state.counter.singleR);
  const dispatch = useDispatch();
  const maxValue = 5;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="wrapper2 mt-5 none wz ">
      <div className="w-full md:flex gap-6">
        <div className="w-full md:w-[30%] ">
          <div className="bg-[#fff] p-4 border rounded-md mb-3 mx-3 mt-4 ">
            <h1 className="text-bold text-xl  py-5 text-center">
              Check Availability
            </h1>
          </div>
          <div className="bg-[#fff] p-4 rounded-md mx-3 mb-10 border">
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
            <div className="md:flex ">
              <div className="md:flex flex-1 items-start">
                <Image
                  src="/images/j1.jpg"
                  width={200}
                  height={300}
                  className="rounded-md h-[200px] w-full md:w-[200px]"
                  alt=""
                />
                <div className="ml-2">
                  <h1 className="font-bold text-2xl">
                    Over 55&#39; Break | 2 Night Stay with Dinner from $159 each
                  </h1>

                  <Link href="/" legacyBehavior>
                    <a className="opacity-60">
                      <span></span>View Details
                    </a>
                  </Link>
                </div>
              </div>
              <div>
                <p className="md:flex justify-end opacity-70">from</p>
                <h1 className="font-bold text-2xl">
                  $300<span>.00</span>
                </h1>
                <p className="hidden md:flex justify-end opacity-70">total stay</p>
              </div>
            </div>
          </div>
          <div className="border ml-3" />
          <div className="input-container md:flex items-center mx-3">
            <div className="mb-2">
              <label className="mr-4">Check-in</label>

              <DatePicker
                minDate={new Date()}
                closeCalendar={false}
                onChange={onChange}
                value={value}
              />
            </div>
            <div className="flex-1 mb-2">
              <label className="pr-2">Check-out</label>

              <DatePicker
                minDate={new Date()}
                closeCalendar={false}
                onChange={onChange2}
                value={value2}
              />
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mx-3">
            <div>
              <label htmlFor="emailValue" className="mb-[3px]">
                Email Address
                <span className="text-red-500 relative top-[5px]">*</span>
              </label>
              <br />
              <input
                type="emailValue"
                id="email"
                {...register("email", { required: true })}
                className="w-full py-2 border active:border-none"
              />
              {errors.email && (
                <div className="text-red-600">this is a required field</div>
              )}
            </div>
            <div>
              <label htmlFor="textValue" className="mb-[3px]">
                First Name
                <span className="text-red-500 relative top-[5px]">*</span>
              </label>
              <br />
              <input
                type="text"
                id="textValue"
                {...register("firstName", { required: true })}
                className="w-full py-2 border active:border-none"
              />
              {errors.firstName && (
                <div className="text-red-600">this is a required field</div>
              )}
            </div>
            <div>
              <label htmlFor="lastValue" className="mb-[3px]">
                Last Name
                <span className="text-red-500 relative top-[5px]">*</span>
              </label>
              <br />
              <input
                type="text"
                id="lastValue"
                {...register("lastName", { required: true })}
                className="w-full py-2 border active:border-none"
              />
              {errors.lastName && (
                <div className="text-red-600">this is a required field</div>
              )}
            </div>
            <h5 className="text-bold mb-4">Tick To Sign Up To Our Offers</h5>
            <div>
              <input type="checkbox"></input>
              <span className="opacity-70">I would like to receive offers</span>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#af9355] hover:bg-[#777] rounded-md text-[15px] p-[15px]"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Availability;
