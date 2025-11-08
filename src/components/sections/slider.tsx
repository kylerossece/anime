"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Pagination } from "swiper/modules";
// useState,
import { useRef } from "react";
import { Swiper as SwiperClass } from "swiper/types";
import { Icons } from "@/components/ui/icons";
import type { PageItem } from "@/types/types";
import { cn } from "@/lib/utils";
import { HoverCardItems } from "@/components/ui/hoverCardItems";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { CardLink } from "@/components/ui/cardLink";

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

  return (
    <div className={cn("pt-6", className)}>
      <div className="w-full mb-4 flex justify-between items-end">
        <p className="uppercase font-semibold text-lg leading-5 text-gray-700 dark:text-gray-300 transition-all duration-200 ease-in">
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
        touchEventsTarget="container"
        spaceBetween={30}
        slidesOffsetAfter={30}
        freeMode
        observer
        observeParents
      >
        {animeData.map((item: PageItem, index: number) => (
          <SwiperSlide
            key={index}
            className="!w-auto flex justify-items-center"
          >
            <HoverCard openDelay={200} closeDelay={400}>
              <HoverCardTrigger asChild>
                <div>
                  <CardLink item={item}></CardLink>
                </div>
              </HoverCardTrigger>
              <HoverCardItems item={item}></HoverCardItems>
            </HoverCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { Slider };
