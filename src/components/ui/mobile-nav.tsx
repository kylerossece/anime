"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import React from "react";

interface SubLink {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  title?: string;
  Icon?: React.ComponentType<React.SVGAttributes<SVGElement>>;
  links?: SubLink[];
}

interface MobileNavProps {
  links: NavLink[];
}

const MobileNav = ({ links }: MobileNavProps) => {
  return (
    <nav className="lg:hidden block mt-1 cursor-pointer">
      <Sheet>
        <SheetTrigger asChild>
          <Icons.Bars />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>All About</SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto px-4 no-scrollbar">
            <Accordion type="single" className="w-full" collapsible>
              {links.map((item, index) => {
                return index === links.length - 1 ? undefined : (
                  <AccordionItem value={`item-${index + 1}`} key={index}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-6 text-balance">
                      {item.links?.map((link, index) => {
                        return (
                          <Link key={index} href={link.href}>
                            {link.label}
                          </Link>
                        );
                      })}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
            {links.map((item, index) => {
              return (
                index === links.length - 1 && (
                  <Link key={index} href={item.href}>
                    {item.label}
                  </Link>
                )
              );
            })}
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export { MobileNav };
