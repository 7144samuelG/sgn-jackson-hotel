import React from "react";
import { Header } from "../../components/Header";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link"
const Story = () => {
  return (
    <div className="wrapper2">
      <div className="mt-[100px] w-[95%] text-left mx- lg:flex justify-between">
        <Link href="/">
      <div className="w-full border mb-2">
        <Image
          src="/images/story.jpg"
          width={400}
          height={200}
          className="w-full h-[300px] lg:w-[300px]"
          alt=""
        />
       <h1 className="text-center py-2 text-bold" >Family breaks</h1>
        <h3 className="py-2 bg-[#0e394f] w-[150px] text-center after:nr mx-auto rounded-md">Book Now</h3>
      </div>
      </Link>
      <Link href="/">
      <div className="w-full border mb-2">
        <Image
          src="/images/story.jpg"
          width={400}
          height={200}
          className="w-full h-[300px] lg:w-[300px]"
          alt=""
        />
        <h1 className="text-center py-2 text-bold" >Family breaks</h1>
        <h3 className="py-2 bg-[#0e394f] w-[150px] text-center after:nr mx-auto rounded-md">Book Now</h3>
      </div>
      </Link>
      
      <Link href="/">
      <div className="w-full border mb-2">
        <Image
          src="/images/story.jpg"
          width={400}
          height={200}
          className="w-full h-[300px] lg:w-[300px]"
          alt=""
        />
        <h1 className="text-center py-2 text-bold" >Family breaks</h1>
        <h3 className="py-2 bg-[#0e394f] w-[150px] text-center after:nr mx-auto rounded-md">Book Now</h3>
      </div>
      </Link>
      
      
      
     
      </div>
    </div>
  );
};
export default Story;
