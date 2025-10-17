import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";

const Header = ({ children, className, ...props }: ComponentProps<"h2">) => {
  return (
    <h2 className={cn("", className)} {...props}>
      {children}
    </h2>
  );
};

const Paragraph = ({ children, className, ...props }: ComponentProps<"p">) => {
  return (
    <p className={cn("", className)} {...props}>
      {children}
    </p>
  );
};

const Caption = ({ children, className, ...props }: ComponentProps<"span">) => {
  return (
    <span className={cn("", className)} {...props}>
      {children}
    </span>
  );
};

export { Header, Paragraph, Caption };
