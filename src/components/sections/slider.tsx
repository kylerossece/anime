"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Pagination } from "swiper/modules";
// useState, 
import { useRef } from "react";
import { Swiper as SwiperClass } from "swiper/types";
import {Icons} from '@/components/ui/icons'
import type { PageItem } from "@/types/types";
import { SliderCard } from "@/components/sections/sliderCard";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { SliderLink } from "./sliderLink";


interface sliderProps {
  animeData: PageItem[];
  className?: string;
  title?: string;
}
const Slider = ({ animeData, className, title }: sliderProps) => {
  // const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const scrollPreviousSlide = () => {
    swiperRef.current?.slidePrev();
  };
  const scrollNextSlide = () => {
    swiperRef.current?.slideNext();
  };
  // console.log(activeIndex)
  return (

    <div className={cn("pt-6", className)}>
      <div className="w-full mb-4 flex justify-between items-end">
        <p className="uppercase font-semibold text-lg leading-5 text-gray-700">
          {title}
        </p>
        <p className="flex gap-1.5">
          <span
            className="cursor-pointer p-2 bg-gray-200 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-200 ease-in"
            onClick={scrollPreviousSlide}
          >
            <Icons.ChevronLeft />
          </span>
          <span
            className="cursor-pointer p-2 bg-gray-200 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-200 ease-in"
            onClick={scrollNextSlide}
          >
            <Icons.ChevronRight />
          </span>
        </p>
      </div>

      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Pagination]}
        grabCursor
        slidesPerView="auto"
        speed={800}
        slideToClickedSlide
        touchEventsTarget="container"
        spaceBetween={30}
        slidesOffsetAfter={30}
        freeMode
      >
        {animeData.map((item: PageItem, index: number) => (
          <SwiperSlide key={index} className="!w-auto flex justify-start items-baseline">
        
        <HoverCard>
        <HoverCardTrigger asChild>
                 <div>
                <SliderLink item={item}></SliderLink>
                </div>
                </HoverCardTrigger>
               <SliderCard item={item}></SliderCard>
                </HoverCard>
      
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
};

export { Slider };
