"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Gallen = () => {
  return (
    <>
      <div className="text-center ">
        <h1 className="font-bold text-[2rem]">OUR HOTELS</h1>
        <h1 className="font-bold text-[1.5rem] mt-5 mb-2">Villa Rose</h1>
        <Link href="/">
        <Image
          src="/images/oh.jpg"
          width={400}
          height={400}
          alt=""
          className="w-full md:w-[50%] mx-auto object-contain"
        />
        </Link>
      </div>
      <div className="my-3">
        <Link href="/">
        <Image
          src="/images/ohl.jpg"
          width={400}
          height={400}
          alt=""
          className="w-full md:w-[50%] mx-auto"
        />
        </Link>
      </div>
      <div>
        <Link href="/">
        <Image
          src="/images/ohr.jpg"
          width={400}
          height={400}
          alt=""
          className="w-full md:w-[50%] mx-auto"
        />
        </Link>
      </div>
    </>
  );
};
export default Gallen;
