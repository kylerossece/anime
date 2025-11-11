"use client";
import { Icons } from "@/components/ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

const NavTooltip = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const storageTheme = localStorage.getItem("theme") as "light" | "dark";
    const initialTheme = storageTheme || "light";
    setTheme(initialTheme);
    document.body.setAttribute("data-theme", initialTheme);
  }, []);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 800);
    return () => clearTimeout(timeout);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          onClick={toggleTheme}
          className={`inline-flex items-center justify-end text-lg cursor-pointer ${
            animate ? "fade-animation" : ""
          }`}
        >
          {theme === "light" ? <Icons.Moon /> : <Icons.Sun />}
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>
          {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        </p>
      </TooltipContent>
    </Tooltip>
  );
};

export { NavTooltip };
