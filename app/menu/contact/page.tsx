"use client"
import React from "react";
import { Header } from "../../components/Header";
import Image from "next/image";
import { useFormik, Formik, FormikHelpers } from "formik";
interface Values {
  Name: string;
  email: string;
  message: string;
}
const Contact = () => {
  async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const target=e.currentTarget;
    const userName=target.elements.namedItem("userName") as HTMLInputElement;
      const email=target.elements.namedItem("email") as HTMLInputElement;
      const message=target.elements.namedItem("message") as HTMLInputElement;
    const data={
      userName:userName.value,
      email:email.value,
      message:message.value
    };
    console.log(data)
    try{
      const response=await fetch("/api/contact",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
          "Content-Type":"application/json"
        }
      })
      if(!response.ok){
        throw new Error("HTTP error! status: " + response.status)
      }
      const responseData=await response.json();
      console.log(responseData,"res>>");
    }catch(err:any){}
  }
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
      <div className="mt-[200px] w-[95%] text-left md:w-[80%] lg:w-[70%] mx-auto">
        <h1 className="text-2rem font-semibold text-center">CONTACT</h1>
        <p className="font-semibold py-3 text-center">Jackson&#39;s Hotel</p>
        <p className="text-center  py-3">
          Main Street,Ballybofey,Co Donegal,F93 RD40
        </p>
        <h2 className="text-center font-semibold">
          Telephone:<span className="text-sm">0742337899</span>
        </h2>
        <h2 className="text-center font-semibold">
          Email:
          <a href="mailto:samutech144@gmail.com" className="text-sm">
            samutech144@gamil.com
          </a>
        </h2>
        <p className="text-center mb-10">
          Alternatively,Use the form below to send us an email
        </p>
        <div>
          <form onSubmit={handleSubmit}>
            <div className=" w-3/4 mx-auto">
              <label htmlFor="userName" className="font-bold">
                Name*
              </label>
              <input
                type="text"
                id="userName"
                className="w-full bg-slate-50 py-4 px-6 focus:outline-none border-none"
                required
                name="userName"
                minLength={3}
                maxLength={20}
              />
            </div>
            <div className=" w-3/4 mx-auto">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" 
              name="email"
              className="w-full bg-slate-50 py-4 px-6 focus:outline-none border-none" required />
            </div>
            <div className=" w-3/4 mx-auto">
              <label htmlFor="message">Message*</label>
              {/* textarea */}
              <input type="text" id="message"
              className="w-full bg-slate-50 py-4 px-6 focus:outline-none border-none"
              required
              minLength={10}
              maxLength={200}
              name="message"
              />
              
            </div>
            <div className=" w-3/4 mx-auto">
              <input type="checkbox" />
              <label >
                I hereby consent to receive emails from Jacksons Hotel
              </label>
            </div>
            <div className=" w-3/4 mx-auto text-center">
              <button type="submit" className="text-white bg-[rgb(12,49,67)] w-full py-3 hover:bg-black active:bg-black text-[1.1rem]">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
