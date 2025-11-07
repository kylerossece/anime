"use client";
import { Container } from "@/components/ui/container";
import { useScrollNav } from "@/hooks/use-scroll-nav";
import Link from "next/link";

import { Icons } from "@/components/ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

const Header = () => {
  const { isScrolled } = useScrollNav();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storageTheme = localStorage.getItem("theme") as "light" | "dark";
    const initialTheme = storageTheme || "light";
    setTheme(initialTheme);
    document.body.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  const links = [
    {
      label: "Anime",
      href: "/anime",
    },
    {
      label: "Manga",
      href: "/manga",
    },
    {
      label: "Characters",
      href: "/characters",
    },
  ] as const;

  return (
    <TooltipProvider>
      <header
        className={`fixed w-full lg:px-32 px-14 z-40 top-0 bg-slate-800 text-slate-100 flex items-center transition-all duration-300 ease-in-out ${
          isScrolled ? "h-[4.5rem]" : "h-14"
        }`}
      >
        <Container>
          <div className="grid grid-cols-3 text-slate-300">
            <div className="flex items-center">Anime List</div>
            <nav className="hidden items-center justify-center gap-x-14 lg:flex text-sm  font-medium">
              {links.map(({ href, label }, index) => (
                <Link key={index} href={href}>
                  {label}
                </Link>
              ))}
            </nav>
            <Tooltip>
              <TooltipTrigger asChild>
                <span
                  onClick={toggleTheme}
                  className="inline-flex items-center justify-end text-lg cursor-pointer"
                >
                  {theme === "light" ? <Icons.Moon /> : <Icons.Sun />}
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {theme === "light"
                    ? "Switch to dark mode"
                    : "Switch to light mode"}
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
        </Container>
      </header>
    </TooltipProvider>
  );
};

export { Header };
