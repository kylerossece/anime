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
        "relative min-h-svh flex flex-col w-full px-32 py-0",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export { Section };
