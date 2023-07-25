"use client"
import React from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form"
type Inputs = {
    email: string
    firstName: string
    lastName:string
  }
const Newsletter = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <div>
      
      <div className="z-0 h-[300px] border">
        <Image
          src="/images/story.jpg"
          width={400}
          height={200}
          className="w-full h-[500px]"
          alt=""
        />
      </div>
      <div className="mt-[200px] w-[95%] md:w-[80%] lg:w-[70%] mx-auto">
        <h1 className="font-bold mb-[15px] text-[3rem]">NEWSLETTER SIGN-UP</h1>
        <h3 className="font-bold my-[15px]">SUBSCRIBE TO OUR MAILING LIST</h3>
        <form onSubmit={handleSubmit(onSubmit)} >
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
                <label htmlFor="lastValue" className="mb-[3px]">Last Name<span 
                className="text-red-500 relative top-[5px]">*</span></label><br/>
                <input type="text" id="lastValue" {...register("lastName",{required:true})} className="w-full py-2 border active:border-none" />
                {errors.lastName&&(<div className="text-red-600">
                    this is a required field
                </div>)}
            </div>
            <h5 className="text-bold mb-4">Tick To Sign Up To Our Offers</h5>
            <div>
                <input type="checkbox" ></input><span className="opacity-70">I would like to receive offers</span>
            </div>
            <div>
                <button type="submit" className="bg-[#af9355] hover:bg-[#777] rounded-md text-[15px] p-[15px]">
                    SUBSCRIBE
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};
export default Newsletter;
