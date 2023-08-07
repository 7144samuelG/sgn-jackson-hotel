"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form"
type Inputs = {
    email: string
    firstName: string
    lastName:string,
    enquiry:string
  }
const Newsletter = () => {
    const [message,setMessage]=useState<string>("")
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) =>{
        setMessage("your enquiry has been sent successfully");
        setValue("email","");
        setValue("firstName","");
        setValue("lastName","");
        setValue("enquiry","");
      }
  return (
    <div>
      
      <div className="z-0 h-[300px] border">
      <Image
          src="/images/wedding_home_banner.jpg"
          width={400}
          height={200}
          className="w-full h-[600px]"
          alt=""
        />
      </div>
      <div className="mt-[200px] w-[95%] md:w-[80%] lg:w-[70%] mx-auto">
        <p className="text-center pt-[200px] lg:pt-[230px] pb-[60px]">Considering Jacksons7#39sHotel as your dream Wedding Venue? Contact us today and our team will be happy to help</p>
        <p className="text-center">Email:<a href="mailto:samutech1442gmail.com">samutech144@gmail.com</a>| phone - 25442337899</p>
        <div className="border mt-[100px] mb-[50px]"/>
        <h4>Enquire about hosting your wedding at jacksons Hotel</h4>
        <p>you</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="emailValue" className="mb-[3px]">Email Address<span 
                className="text-red-500 relative top-[5px]">*</span></label><br/>
                <input type="emailValue" id="email" {...register("email",{required:true})} 
                className="w-full py-2 border active:border-none"/>
                {errors.email&&(<div className="text-red-600">
                    this is a required field
                </div>)}
            </div>
            <div>
                <label htmlFor="textValue" className="mb-[3px]">First Name<span 
                className="text-red-500 relative top-[5px]">*</span></label><br/>
                <input type="text" id="textValue" {...register("firstName",{required:true})} className="w-full py-2 border active:border-none"/>
                {errors.firstName&&(<div className="text-red-600">
                    this is a required field
                </div>)}
            </div>
            <div>
                <label htmlFor="lastValue" className="mb-[3px]">Notes or requests<span 
                className="text-red-500 relative top-[5px]">*</span></label><br/>
                <textarea  id="lastValue" rows={6} {...register("enquiry",{required:true,maxLength:1000})} 
                className="w-full py-2 border active:border-none" ></textarea>
                {errors.enquiry&&(<div className="text-red-600">
                    this is a required field
                </div>)}
            </div>
            
            
            <div>
                <button type="submit" className="bg-[#af9355] hover:bg-[#777] rounded-md text-[15px] p-[15px]">
                    ENQUIRE
                </button>
            </div>
            <p className="py-[30px] text-center">{message}</p>
        </form>
      </div>
    </div>
  );
};
export default Newsletter;
