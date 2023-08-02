"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const WeddingLinks = () => {
  const router=useRouter();
  
  const goToPage=(name:string|undefined)=>{
    if(window.innerWidth<=768){
      router.push(`/${name}`)
    }
  }
  return (
    <div className="md:flex  w-full justify-center ">
      <div className="enq w-full md:w-1/2 h-full relative hf-wra cursor-pointer" onClick={()=>goToPage("")}>
      <div
              className="absolute bottom-0 left-0 right-0 p-[5px] text-[#0c3143] ch
         h-full w-full  text-center ab figacaption"
            >
              <div
                className="left-0 right-0 bottom-0 w-[90%] my-0 mx-auto
           z-5 text-center chh element-content ab"
              >
                <h2  className="mobile text-red-500 font-semibold lt mb-[20px] text-[2rem]">
                  WEDDING ENQUIRY
                </h2>
                <Link href="/" legacyBehavior>
                  <a className="link-btn bt border border-white h-[38px] lha
                   text-red-400 py-0 px-[25px] lin button-ghost">
                    SEE MORE
                  </a>
                </Link>
              </div>
            </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="md:flex gap-2 ">



          <div className="venue h-[200px] relative hf-wra cursor-pointer" onClick={()=>goToPage("wedding/venue")}>
            <div
              className="absolute bottom-0 left-0 right-0 p-[5px] text-[#0c3143] ch
         h-full w-full  text-center ab figacaption"
            >
              <div
                className="äbsolute left-0 right-0 bottom-0 w-[90%] my-0 mx-auto
           z-5 text-center chh element-content ab"
              >
                <h2 className=" text-red-500 font-semibold lt mb-[20px] text-[1rem]">
                   WEDDING VENUE
                </h2>
                <Link href="/wedding/venue" legacyBehavior>
                  <a className=" link-btn bt border border-white h-[38px] lha text-red-400 py-0 px-[25px] lin button-ghost">
                    SEE MORE
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="packages h-[200px] hf-wra cursor-pointer" onClick={()=>goToPage("wed/packages")}>
            <div
              className="absolute bottom-0 left-0 right-0 p-[5px] text-[#0c3143] ch
         h-full w-full  text-center ab figacaption"
            >
              <div
                className="äbsolute left-0 right-0 bottom-0 w-[90%] my-0 mx-auto
           z-5 text-center chh element-content ab"
              >
                <h2 className=" text-red-500 font-semibold lt mb-[20px] text-[1rem]">
                    WEDDING PACKAGES
                </h2>
                <Link href="/wed/packages" legacyBehavior>
                  <a className="bt link-btn border border-white h-[38px] lha text-red-400 py-0 px-[25px] lin button-ghost">
                    SEE MORE
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex gap-2">
          <div className="brochure hf-wra cursor-pointer" onClick={()=>goToPage("wed/brochure")}>
            <div
              className="absolute bottom-0 left-0 right-0 p-[5px] text-[#0c3143] ch
         h-full w-full  text-center ab figacaption"
            >
              <div
                className="äbsolute left-0 right-0 bottom-0 w-[90%] my-0 mx-auto
           z-5 text-center chh element-content ab"
              >
                <h2 className=" text-red-500 font-semibold lt mb-[20px] text-[1rem]">
                   BROCHURE
                </h2>
                <Link href="/wed/brochure" legacyBehavior>
                  <a className="bt border link-btn border-white h-[38px] lha text-red-400 py-0 px-[25px] lin button-ghost">
                    SEE MORE
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="gallery hf-wra cursor-pointer" onClick={()=>goToPage("gallery")}>
            <div
              className="absolute bottom-0 left-0 right-0 p-[5px] text-[#0c3143] ch
         h-full w-full  text-center ab figacaption"
            >
              <div
                className="äbsolute left-0 right-0 bottom-0 w-[90%] my-0 mx-auto
           z-5 text-center chh element-content ab"
              >
                <h2 className=" text-red-500 font-semibold lt mb-[20px] text-[2rem]">
                  GALLERY
                </h2>
                <Link href="/gallery" legacyBehavior>
                  <a className="bt border border-white link-btn h-[38px] lha text-red-400 py-0 px-[25px] lin button-ghost">
                    SEE MORE
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeddingLinks;
