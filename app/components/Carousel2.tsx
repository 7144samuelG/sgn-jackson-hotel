/* eslint-disable @next/next/no-img-element */
"import client"
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";
function SplideCarousel() {
  return (
    <div className="absolute top-0 left-0 right-0">
      <div>
        <Splide
          aria-label="My Favorite Images"
          
        >
          <SplideSlide>
            <Link href="/">
              <img src="/images/im1.jpg" alt="Image 1" />
            </Link>
          </SplideSlide>
          
        </Splide>
      </div>
    </div>
  );
}

export default SplideCarousel
