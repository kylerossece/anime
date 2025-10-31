"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
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
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "@/store/slices/searchSlice";
import { useState, useEffect, useCallback } from "react";
import {
  genres as allGenres,
  format as allFormat,
  season as allSeason,
  years as allYears,
} from "@/data/data";

interface sheetProps {
  handleSearch?: (currentFilter?: any) => void;
}

const SheetPage = ({ handleSearch }: sheetProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [tags, setTags] = useState<string[]>([]);

  const { filterValue, hasFilter } = useSelector(
    (state: RootState) => state.search
  );

  const genres = filterValue.genres;

  const handleSearchClick = useCallback(
    (value: string, key: string) => {
      const updatedTags = tags.includes(value)
        ? tags.filter((t) => t !== value)
        : [...tags, value];

      setTags(updatedTags);

      const updatedFilter = {
        ...filterValue,
        [key]: updatedTags,
      };

      dispatch(setFilterValue({ [key]: updatedTags }));
      handleSearch && handleSearch(updatedFilter);
    },
    [tags, filterValue, dispatch, handleSearch]
  );
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter and Sort</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <Accordion
            type="multiple"
            className="w-full"
            defaultValue={["item-1"]}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Genres</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-6 text-balance">
                {allGenres.map((genre, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <Checkbox
                      id={genre}
                      onClick={() => {
                        handleSearchClick(genre, "genres");
                      }}
                    />
                    <Label htmlFor={genre}>{genre}</Label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Shipping Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance"></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Return Policy</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <SheetFooter>
          <Button onClick={handleSearch}>Apply Filter</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export { SheetPage };
