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
        "relative min-h-svh flex flex-col w-full lg:px-32 px-14 pt-14 z-10 bg-zinc-100 dark:bg-slate-900 transition-colors duration-300 ease-in-out",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export { Section };
