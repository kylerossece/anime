"use client";
import { HoverCardContent } from "@/components/ui/hover-card";
import React from "react";
import { useScrollNav } from "@/hooks/use-scroll-nav";
import Link from "next/link";
interface NavCardLink {
  label: string;
  href: string;
}

interface NavCardItem {
  label: string;
  href: string;
  title?: string;
  Icon?: React.ComponentType<React.SVGAttributes<SVGElement>>;
  links?: NavCardLink[];
}

interface NavCardProps {
  item: NavCardItem;
}
const NavCard = ({ item }: NavCardProps) => {
  const { isScrolled } = useScrollNav();

  const Icon = item.Icon;
  return (
    <HoverCardContent sideOffset={isScrolled ? 30 : 22} className="!w-fit">
      <div className="flex gap-3 items-start pe-3">
        {Icon && <Icon className="mt-1 text-slate-800" />}

        <div className="flex flex-col gap-1 items-start">
          {item.title && (
            <span className="font-medium text-gray-900">{item.title}</span>
          )}
          <div className="flex flex-col gap-2 mt-1">
            {item.links?.map(({ href, label }, index) => (
              <Link
                key={index}
                href={href}
                className="text-slate-800 font-light"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </HoverCardContent>
  );
};

export { NavCard };
