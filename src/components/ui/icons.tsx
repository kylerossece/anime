import {
  IoChevronBackOutline,
  IoChevronForward,
  IoChevronDown,
  IoChevronUp,
  IoFilter,
} from "react-icons/io5";
import { FaSun, FaMoon } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { IoIosTrendingUp } from "react-icons/io";
import { IoTrophyOutline, IoBook } from "react-icons/io5";
import { TbChartBarPopular } from "react-icons/tb";
import { FaPlay } from "react-icons/fa6";
import React from "react";

type IconProps = React.SVGAttributes<SVGElement>;

const Icons = {
  ChevronLeft: IoChevronBackOutline,
  ChevronRight: IoChevronForward,
  ChevronUp: IoChevronUp,
  ChevronDown: IoChevronDown,
  Television: PiTelevisionSimpleBold,
  Filter: IoFilter,
  Sun: FaSun,
  Moon: FaMoon,
  Trending: IoIosTrendingUp,
  Top: IoTrophyOutline,
  Popular: TbChartBarPopular,
  Play: FaPlay,
  Book: IoBook,
} as const;

export { Icons, type IconProps };
