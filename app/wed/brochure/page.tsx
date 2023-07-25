"use client";
import { Header } from "@/app/components/Header";
import WeddingLinks2 from "@/app/components/WeddingLinks2";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
function WeddingVenue() {
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
      <div className="mt-[330px] w-[95%] md:w-[80%]  mx-auto">
        <div className="border my-3" />
        <p className="text- text-center">
        We have tailored three wedding packages that you can choose from on your 
        Wedding Day at Jackson&#39;s Hotel. It is important that our Wedding Menu 
        is tailored to you and your tastes. Please see the following options below,
         our wedding packages begin from €55 per guest  
        </p>
        <p className="text-center text-sm">
        ou have any queries, please do not hesitate to contact our wedding team on 00353 74 913 1021 
        or e-mail weddings.rh@gallengroup.com
        </p>
      </div>
    </div>
  );
}

export default WeddingVenue;
