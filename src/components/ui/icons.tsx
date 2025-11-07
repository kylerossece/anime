import {
  IoChevronBackOutline,
  IoChevronForward,
  IoChevronDown,
  IoChevronUp,
  IoFilter,
} from "react-icons/io5";
import { FaSun, FaMoon } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";

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
} as const;

export { Icons, type IconProps };
