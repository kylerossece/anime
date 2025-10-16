import React from "react";
import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";
const Section = ({
  id,
  className,
  children,
  ...props
}: ComponentProps<"section">) => {
  return (
    <section
      id={id}
      className={cn(
        "relative min-h-svh flex flex-col w-full lg:px-32 px-14 py-0 z-10 bg-zinc-50",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export { Section };
