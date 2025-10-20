"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Navigation, Pagination } from "swiper/modules";
import { useState, useRef } from "react";
import { Swiper as SwiperClass } from "swiper/types";
import Image from "next/image";
import Link from "next/link";
import {Icons} from '@/components/ui/icons'
import type { PageItem } from "@/types/types";
import { cn } from "@/lib/utils";

interface sliderProps {
  animeData: PageItem[];
  className?: string;
  title?: string;
}
const Slider = ({ animeData, className, title }: sliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const scrollPreviousSlide = () => {
    swiperRef.current?.slidePrev();
  };
  const scrollNextSlide = () => {
    swiperRef.current?.slideNext();
  };
  return (
    <div className={cn('pt-8', className)}>
      <div className="w-full mb-2 flex justify-between items-end">
        <p className="uppercase font-semibold text-lg leading-5 text-gray-700">{title}</p>
        <p className="flex gap-1.5">
        <span className="cursor-pointer p-2 bg-gray-200 rounded-full hover:bg-gray-800 hover:text-white" onClick={scrollPreviousSlide}><Icons.ChevronLeft /></span>
        <span className="cursor-pointer p-2  bg-gray-200 rounded-full hover:bg-gray-800 hover:text-white" onClick={scrollNextSlide}><Icons.ChevronRight /></span>
        </p>
      </div>
    <Swiper
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      modules={[Pagination]}
      grabCursor={true}

      slidesPerView="auto"
      speed={800}
      slideToClickedSlide={true}
      touchEventsTarget={"container"}

      spaceBetween={30}
      slidesOffsetAfter={30}
      slidesOffsetBefore={0}
      freeMode={true}

      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {animeData.map((item: PageItem, index: number) => {
        return (
        
   
          <SwiperSlide
            key={index}
            className="!w-auto flex justify-start items-baseline"
          >
            <Link href={`anime/${item.id}`}>
            <div className="w-[250px]">
            <div className="relative h-[325px] shadow-lg rounded-md">
              <Image
                src={item.coverImage.extraLarge}
                alt={item.title.userPreferred || ""}
                fill
                className="object-cover rounded-md"
                priority
              />
            </div>
            <p className="pt-2 ml-0.5 font-medium line-clamp-2 text-sm">{item.title.english || item.title.userPreferred || ''}</p>
          </div>
            </Link>

          </SwiperSlide>
 
     
        );
      })}
    </Swiper>
    </div>
  );
};

export { Slider };
