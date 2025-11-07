"use client";
import { Input } from "@/components/ui/input";
import { useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { query } from "@/query/page";
import { getAnime } from "@/api/getAnime";
import {
  setData,
  setIsSearching,
  setHasFilter,
} from "@/store/slices/searchSlice";
import type { PageResponse } from "@/types/types";
import { SheetPage } from "@/components/sections/sheetPage";

type Timeout = ReturnType<typeof globalThis.setTimeout>;

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filterValue } = useSelector((state: RootState) => state.search);
  const searchRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<Timeout | null>(null);

  const handleSearch = useCallback(
    (currentFilter = filterValue) => {
      const value = searchRef.current?.value ?? "";

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      const isFiltered =
        (currentFilter.genres?.length ?? 0) > 0 ||
        (currentFilter.format?.length ?? 0) > 0 ||
        (currentFilter.season?.trim()?.length ?? 0) > 0 ||
        currentFilter.seasonYear != null;

      dispatch(setHasFilter(isFiltered));
      // console.log("Is Filtered:", isFiltered);

      if (!value && !isFiltered) {
        dispatch(setData([]));
        return;
      }

      timeoutRef.current = setTimeout(async () => {
        try {
          dispatch(setIsSearching(true));

          const queryVal = query({
            sortType: "TITLE_ENGLISH_DESC",
            search: value,
            page: 1,
            genres: currentFilter.genres,
            season: currentFilter.season,
            seasonYear: currentFilter.seasonYear || undefined,
            format: currentFilter.format,
          });

          const res = (await getAnime(queryVal)) as PageResponse | null;
          const searchData = res?.Page?.media || [];

          dispatch(setData(searchData));
          console.log("Query:", queryVal);
        } catch (error) {
          console.error(error);
        } finally {
          dispatch(setIsSearching(false));
        }
      }, 1000);
    },
    [dispatch, filterValue]
  );

  return (
    <div className="pt-12 flex justify-between flex-nowrap items-center">
      <div>
        <Input type="search" ref={searchRef} onInput={() => handleSearch()} />
      </div>
      <SheetPage handleSearch={handleSearch} />
    </div>
  );
};

export { Search };
