"use client";
import { Container } from "@/components/ui/container";
import { useScrollNav } from "@/hooks/use-scroll-nav";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";

const Header = () => {
  const { isScrolled } = useScrollNav();

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
    <header
      className={`fixed w-full lg:px-32 px-14 z-40 top-0 bg-slate-800 text-slate-100 flex items-center transition-all duration-300 ease-in-out ${
        isScrolled ? "h-[4.5rem]" : "h-14"
      }`}
    >
      <Container>
        <div className="grid grid-cols-3">
          <div className="flex items-center">Anime List</div>
          <nav className="hidden items-center justify-center gap-x-14 lg:flex text-sm uppercase font-medium">
            {links.map(({ href, label }, index) => (
              <Link key={index} href={href}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-end gap-3">
            <Switch />
            Light Mode
          </div>
        </div>
      </Container>
    </header>
  );
};

export { Header };