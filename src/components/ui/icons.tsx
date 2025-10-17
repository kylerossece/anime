import {
  IoChevronBackOutline,
  IoChevronForward,
  IoChevronDown,
  IoChevronUp,
} from "react-icons/io5";
import { PiTelevisionSimpleBold } from "react-icons/pi";

import React from "react";

type IconProps = React.SVGAttributes<SVGElement>;

const Icons = {
  ChevronLeft: IoChevronBackOutline,
  ChevronRight: IoChevronForward,
  ChevronUp: IoChevronUp,
  ChevronDown: IoChevronDown,
  Television: PiTelevisionSimpleBold,
} as const;

export { Icons, type IconProps };
