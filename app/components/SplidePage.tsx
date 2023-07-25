/* eslint-disable react/jsx-no-comment-textnodes */
"use client"
import React from 'react'
import { Splide,SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Image from 'next/image'
function SplidePage() {
  return (
  <div className='w-[90%] md:w-[80%] mx-auto border border-red-900 flex justify-center'>
      <Splide aria-label='dinning'
      options={{
        perPage: 3,
        perMove: 1,
        type: "loop",
        rewind: true,
        width: 800,
        pagination: false,
        padding: "2rem",
        keyboard: "global",
        breakpoints: {
          1200: { perPage: 3 },
          991: { perPage: 2.3 },
          768: { perPage: 2 },
          500: { perPage: 1.3 },
          425: { perPage: 1 },
        },
      }}
      >
        <SplideSlide>
            <Image src="/images/im1.jpg" alt="" width={400} height={400} className=" img"/>
        </SplideSlide>
        <SplideSlide>
            <Image src="/images/im5.png" width={400} height={4000} alt='' className=" img"/>
        </SplideSlide>
        <SplideSlide>
            <Image src="/images/im1.jpg" alt="" width={400} height={400} className="img"/>
        </SplideSlide>
        <SplideSlide>
            <Image src="/images/im4.jpg" alt="" width={400} height={400} className="img"/>
        </SplideSlide>
        <SplideSlide>
            <Image src="/images/im3.jpg" alt="" width={400} height={400} className="img"/>
        </SplideSlide>
    </Splide>
  </div>
  )
}

export default SplidePage