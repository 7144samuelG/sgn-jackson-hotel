import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import {  Navigation, Pagination } from 'swiper/modules';
import {Swiper,SwiperSlide} from "swiper/react"
import Image from 'next/image';
export default function DonegalSwiper(){
    return(
        <>
        <Swiper navigation={true}
        loop={true}
         modules={[Navigation]} className='z-0 h-[500px]'>
            <SwiperSlide>
                <Image src="/images/d1.png" width={400} height={500} alt='' className="w-full"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/d2.png" width={400} height={500} alt='' className="w-full"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/d3.png" width={400} height={500} alt='' className="w-full"/>
            </SwiperSlide>
        </Swiper>
        </>
    )
}