/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const WeddingLinks2 = () => {
  const router=useRouter();
  const [screenSize,setScreenSize]=useState(getCurrentDimensions());
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
  const goToPage=()=>{
    if(screenSize.width<=768||screenSize.width<="768"){
      router.push("/")
    }
  }
  return (
    <div className="md:flex  w-full justify-center ">
      <div className="enq w-full md:w-1/2 h-full relative hf-wra" onClick={goToPage}>
      <div
              className="absolute bottom-0 left-0 right-0 p-[5px] text-[#0c3143] ch
         h-full w-full  text-center ab figacaption"
            >
              <div
                className="left-0 right-0 bottom-0 w-[90%] my-0 mx-auto
           z-5 text-center chh element-content ab"
              >
                <h2  className="mobile text-red-500 font-semibold lt mb-[20px] text-[2rem]">
                FINN SUITE
                </h2>
                <Link href="/wed/finn-suite" legacyBehavior>
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
          <div className="venue h-[200px] relative hf-wra">
            <div
              className="absolute bottom-0 left-0 right-0 p-[5px] text-[#0c3143] ch
         h-full w-full  text-center ab figacaption"
            >
              <div
                className="äbsolute left-0 right-0 bottom-0 w-[90%] my-0 mx-auto
           z-5 text-center chh element-content ab"
              >
                <h2 className=" text-red-500 font-semibold lt mb-[20px] text-[1rem]">
                DRUMBOE SUITE
                </h2>
                <Link href="/wed/drumboe" legacyBehavior>
                  <a className=" link-btn bt border border-white h-[38px] lha text-red-400 py-0 px-[25px] lin button-ghost">
                    SEE MORE
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="packages h-[200px] hf-wra ">
            <div
              className="absolute bottom-0 left-0 right-0 p-[5px] text-[#0c3143] ch
         h-full w-full  text-center ab figacaption"
            >
              <div
                className="äbsolute left-0 right-0 bottom-0 w-[90%] my-0 mx-auto
           z-5 text-center chh element-content ab"
              >
                <h2 className=" text-red-500 font-semibold lt mb-[20px] text-[1rem]">
                CEREMONY OPTIONS
                </h2>
                <Link href="/wed/ceremony-options" legacyBehavior>
                  <a className="bt link-btn border border-white h-[38px] lha text-red-400 py-0 px-[25px] lin button-ghost">
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
                <h2 className=" text-red-500 font-semibold lt mb-[20px] text-[1rem]">
                PYRAMID SUITE 
                </h2>
                <Link href="/wed/pyramid-suite" legacyBehavior>
                  <a className="bt border link-btn border-white h-[38px] lha text-red-400 py-0 px-[25px] lin button-ghost">
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
                <h2 className=" text-red-500 font-semibold lt mb-[20px] text-[2rem]">
                BRIDAL SUITE
                </h2>
                <Link href="/we/bridal-suite" legacyBehavior>
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
export default WeddingLinks2;
