import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div>
      <div className="bg-[#a0a0a7]  px-5  my-3 text-center  py-5">
        <div className="md:w-[90%] mx-auto flex  flex-col sm:flex-row sm:justify-between">
          <Link href="/" legacyBehavior>
            <a className="">OUR STORY</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="">SITE MAP</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="">PRIVANCY POLICY</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="">GALLERY</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="">NEWSLETTER</a>
          </Link>

          <Link href="/" legacyBehavior>
            <a className="">EXPLORE DONEGAL</a>
          </Link>
        </div>
      </div>
      <div className="flex  justify-center space-x-5 my-5">
        <Link href="/" legacyBehavior>
          <Image
            src="/images/icon-facebook.svg"
            width={22}
            height={200}
            alt=""
          />
        </Link>
        <Link href="/" legacyBehavior>
          <Image
            src="/images/icon-twitter.svg"
            width={22}
            height={200}
            alt=""
            className="text-black"
          />
        </Link>
        <Link href="/" legacyBehavior>
          <Image
            src="/images/icon-instagram.svg"
            width={22}
            height={200}
            alt=""
          />
        </Link>
      </div>
      <h1 className="text-center pt-4">©{new Date().getFullYear()} Jacksons Hotel, Glenfin St, Ballybofey, Co. Donegal, Ireland, F93 RD40</h1>
      <h1 className="text-center pb-4">T: +353 74 913 1021 | E: info@jacksonshotel.ie</h1>
      <div className="flex justify-center opacity-60 py-7">
      <Image src="/images/net.svg" width={200} height={20}  alt=""/>
      </div>
    </div>
  );
};
