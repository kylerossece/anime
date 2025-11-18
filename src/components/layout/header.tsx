"use client";
import { Container } from "@/components/ui/container";
import { useScrollNav } from "@/hooks/use-scroll-nav";
import Link from "next/link";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { NavTooltip } from "@/components/ui/nav-tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NavCard } from "@/components/ui/nav-card";
import { Icons } from "@/components/ui/icons";
import { MobileNav } from "@/components/ui/mobile-nav";
const Header = () => {
  const { isScrolled } = useScrollNav();

  const links = [
    {
      label: "Anime",
      href: "/anime",
      title: "Anime",
      Icon: Icons.Play,
      links: [
        {
          label: "Trending",
          href: "/search/anime/trending",
        },
        {
          label: "Popular",
          href: "/search/anime/popular",
        },
        { label: "Top", href: "/search/anime/top" },
      ],
    },
    {
      label: "Manga",
      href: "/manga",
      title: "Manga",
      Icon: Icons.Book,
      links: [
        {
          label: "Trending",
          href: "/search/manga/trending",
        },
        {
          label: "Popular",
          href: "/search/manga/popular",
        },
        { label: "Top", href: "/search/manga/top" },
      ],
    },
    {
      label: "Characters",
      href: "/search/characters",
    },
  ];

  return (
    <TooltipProvider>
      <header
        className={`fixed w-full lg:px-32 px-14 z-40 top-0 bg-slate-800 text-slate-100 flex items-center transition-all duration-300 ease-in-out ${
          isScrolled ? "h-[4.5rem]" : "h-14"
        }`}
      >
        <Container>
          <div className="flex justify-between text-slate-300">
            <div className="flex items-center">Anime List</div>
            <nav className="hidden items-center justify-center gap-x-16 lg:flex text-sm  font-medium">
              {links.map((item, index) => {
                return index === links.length - 1 ? (
                  <Link key={index} href={item.href}>
                    {item.label}
                  </Link>
                ) : (
                  <HoverCard key={index} openDelay={100} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <Link href={item.href || '/'}>{item.label}</Link>
                    </HoverCardTrigger>
                    <NavCard item={item} />
                  </HoverCard>
                );
              })}
              <NavTooltip />
            </nav>
            <MobileNav links={links} />
          </div>
        </Container>
      </header>
    </TooltipProvider>
  );
};

export { Header };
