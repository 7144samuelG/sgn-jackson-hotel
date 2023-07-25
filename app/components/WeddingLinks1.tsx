"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const WeddingLinks1 = () => {
  const router=useRouter();
  const [screenSize,setScreenSize]=useState<any>(getCurrentDimensions());
  function getCurrentDimensions(){
    return{
      width:window.innerWidth,
    }
  }
  useEffect(()=>{
    const updateDimension=()=>{
      setScreenSize(getCurrentDimensions)
    }
    window.addEventListener('resize',updateDimension);
    return(()=>{
      window.removeEventListener('resize',updateDimension);
    })
  },[screenSize])
  const goToPage=(name:string|undefined)=>{
    if(screenSize.width<=768||screenSize.width<="768"){
      router.push(`/${name}`)
    }
  }
  return (
    <div className="md:flex  w-full justify-center ">
      <div className="enq2 w-full md:w-1/2 h-full relative hf-wra" onClick={()=>goToPage("")}>
      <div
              className="absolute bottom-0 left-0 right-0 p-[5px] text-[#0c3143] ch
         h-full w-full  text-center ab figacaption cursor-pointer"
            >
              <div
                className="left-0 right-0 bottom-0 w-[90%] my-0 mx-auto
           z-5 text-center chh element-content ab"
              >
                <h2  className="mobile text-white font-semibold lt mb-[20px] text-[2rem]">
                  SPECIAL OFFERS
                </h2>
                <Link href="/" legacyBehavior>
                  <a className="link-btn bt border border-white h-[38px] lha
                   text-white py-0 px-[25px] lin button-ghost">
                    SEE MORE
                  </a>
                </Link>
              </div>
            </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="md:flex gap-2 ">
          <div className="venue2 h-[200px] relative hf-wra cursor-pointer" onClick={()=>goToPage("rooms")}>
            <div
              className="absolute bottom-0 left-0 right-0 p-[5px] text-[#0c3143] ch
         h-full w-full  text-center ab figacaption"
            >
              <div
                className="äbsolute left-0 right-0 bottom-0 w-[90%] my-0 mx-auto
           z-5 text-center chh element-content ab"
              >
                <h2 className=" text-white font-semibold lt mb-[20px] text-[1rem]">
                   ROOMS
                </h2>
                <Link href="/rooms" legacyBehavior>
                  <a className=" link-btn bt border border-white h-[38px] lha text-white py-0 px-[25px] lin button-ghost">
                    SEE MORE
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="packages2 h-[200px] hf-wra ">
            <div
              className="absolute bottom-0 left-0 right-0 p-[5px] text-[#0c3143] ch
         h-full w-full  text-center ab figacaption"
            >
              <div
                className="äbsolute left-0 right-0 bottom-0 w-[90%] my-0 mx-auto
           z-5 text-center chh element-content ab"
              >
                <h2 className=" text-white font-semibold lt mb-[20px] text-[1rem]">
                    WEDDINGS
                </h2>
                <Link href="/menu/wedding" legacyBehavior>
                  <a className="bt link-btn border border-white h-[38px] lha text-white py-0 px-[25px] lin button-ghost">
                    SEE MORE
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex gap-2">
          <div className="brochure hf-wra">
            <div
              className="absolute bottom-0 left-0 right-0 p-[5px] text-[#0c3143] ch
         h-full w-full  text-center ab figacaption"
            >
              <div
                className="äbsolute left-0 right-0 bottom-0 w-[90%] my-0 mx-auto
           z-5 text-center chh element-content ab"
              >
                <h2 className="  text-white font-semibold lt mb-[20px] text-[1rem]">
                   DINNING
                </h2>
                <Link href="/menu/dinning" legacyBehavior>
                  <a className="bt border link-btn border-white h-[38px] lha text-white py-0 px-[25px] lin button-ghost">
                    SEE MORE
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="gallery hf-wra">
            <div
              className="absolute bottom-0 left-0 right-0 p-[5px] text-[#0c3143] ch
         h-full w-full  text-center ab figacaption"
            >
              <div
                className="äbsolute left-0 right-0 bottom-0 w-[90%] my-0 mx-auto
           z-5 text-center chh element-content ab"
              >
                <h2 className=" text-white font-semibold lt mb-[20px] text-[2rem]">
                  GALLEN HOSPITALITY HOTELS
                </h2>
                <Link href="/gallen" legacyBehavior>
                  <a className="bt border border-white link-btn h-[38px] lha text-white py-0 px-[25px] lin button-ghost">
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
export default WeddingLinks1;
