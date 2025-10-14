import React from "react";

import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";
const Container = ({
  ref,
  children,
  className,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      ref={ref}
      className={cn("mx-auto w-11/12 max-w-[96rem] 2xl:w-4/5", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export { Container };
