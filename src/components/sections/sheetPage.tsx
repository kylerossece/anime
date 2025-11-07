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
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "@/store/slices/searchSlice";
import { useState, useCallback } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { capitalize } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import {
  genres as allGenres,
  format as allFormat,
  season as allSeason,
  years as allYears,
} from "@/data/data";

interface sheetProps {
  handleSearch?: (
    currentFilter?:
      | {
          genres: string[];
          season: string;
          seasonYear: number | null;
          format: string[];
        }
      | undefined
  ) => void;
}

const SheetPage = ({ handleSearch }: sheetProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [tags, setTags] = useState<string[]>([]);

  const { filterValue } = useSelector((state: RootState) => state.search);

  const handleSearchClick = useCallback(
    (value: string | number, key: string, isArray: boolean) => {
      const updatedTags = tags.includes(value.toString())
        ? tags.filter((t) => t !== value)
        : [...tags, value.toString()];

      setTags(updatedTags);

      const updatedFilter = {
        ...filterValue,
        [key]: isArray ? updatedTags : value,
      };

      dispatch(setFilterValue({ [key]: isArray ? updatedTags : value }));
      if (handleSearch) handleSearch(updatedFilter);
    },
    [tags, filterValue, dispatch, handleSearch]
  );
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Icons.Filter />
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter and Sort</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-4 no-scrollbar">
          <Accordion type="single" className="w-full" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Genres</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-6 text-balance">
                {allGenres.map((genre, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <Checkbox
                      id={genre}
                      checked={
                        filterValue.genres && filterValue.genres.includes(genre)
                      }
                      onCheckedChange={() =>
                        handleSearchClick(genre, "genres", true)
                      }
                    />
                    <Label htmlFor={genre}>{genre}</Label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Format</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-6 text-balance">
                {allFormat.map((format, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <Checkbox
                      id={format}
                      checked={
                        filterValue.format &&
                        filterValue.format.includes(format)
                      }
                      onCheckedChange={() =>
                        handleSearchClick(format, "format", true)
                      }
                    />
                    <Label htmlFor={format}>
                      {capitalize(format.replace("_", " "))}
                    </Label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Season</AccordionTrigger>
              <AccordionContent className="">
                <RadioGroup
                  defaultValue="comfortable"
                  value={filterValue.season || ""}
                  className="flex flex-col gap-6 text-balance"
                  onValueChange={(value: string) =>
                    handleSearchClick(value, "season", false)
                  }
                >
                  {allSeason.map((season, index) => (
                    <div className="flex items-center gap-3" key={index}>
                      <RadioGroupItem value={season} id={season} />
                      <Label htmlFor={season}>{capitalize(season)}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Season</AccordionTrigger>
              <AccordionContent className="">
                <RadioGroup
                  defaultValue="comfortable"
                  value={String(filterValue.seasonYear || "")}
                  className="flex flex-col gap-6 text-balance"
                  onValueChange={(value) =>
                    handleSearchClick(Number(value), "seasonYear", false)
                  }
                >
                  {allYears.map((year, index) => (
                    <div className="flex items-center gap-3" key={index}>
                      <RadioGroupItem value={String(year)} id={String(year)} />
                      <Label htmlFor={String(year)}>{year}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <SheetFooter>
          {/* <Button onClick={handleSearch}>Apply Filter</Button> */}
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export { SheetPage };
