'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Navigation, Pagination} from 'swiper/modules';
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";



interface sliderProps {
    animeData: any,

}
const Slider = ({animeData} : sliderProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
    
                <Swiper
        modules={[Pagination]}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        speed={800}
        slideToClickedSlide={true}
        className="w-full py-4"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
            {animeData.map ((item: any, index : number) => {
              return (<SwiperSlide key={index} className="!w-auto flex justify-center items-baseline">
                <Link href={`anime/${item.id}`}>
                <div className="relative w-[400px] h-[400px]">
          
                <Image  src={item.coverImage.large}  alt={item.title.english || ''}       fill
                className="object-cover rounded-md"
                priority ></Image>
                </div>
                </Link>
              </SwiperSlide>)
            })}
        </Swiper>


        
    )
}


export {Slider};