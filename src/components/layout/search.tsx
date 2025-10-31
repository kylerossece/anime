"use client";
import { Input } from "@/components/ui/input";
import { useRef, useCallback, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
//   , useSelector
// RootState,
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
  const [timeoutId, setTimeoutId] = useState<Timeout | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { filterValue, hasFilter } = useSelector(
    (state: RootState) => state.search
  );

  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = useCallback(
    async (currentFilter = filterValue) => {
      const value = searchRef.current?.value ?? "";
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      (currentFilter.genres && currentFilter.genres.length > 0) ||
      (currentFilter.format && currentFilter.format.length > 0) ||
      (currentFilter.season && currentFilter.season.trim() !== "") ||
      currentFilter.seasonYear !== null
        ? dispatch(setHasFilter(true))
        : dispatch(setHasFilter(false));
      // if (!value && !hasFilter) {
      //   return dispatch(setData([]));
      // }
      const newTimeoutId = setTimeout(async () => {
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

      setTimeoutId(newTimeoutId);
    },
    [dispatch, filterValue, timeoutId]
  );
  return (
    <div className="pt-12 flex justify-between flex-nowrap items-center">
      <div>
        <Input ref={searchRef} onInput={() => handleSearch()} />
      </div>
      <SheetPage handleSearch={handleSearch} />
    </div>
  );
};

export { Search };
