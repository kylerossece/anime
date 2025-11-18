"use client";
import { Input } from "@/components/ui/input";
import { useRef, useCallback } from "react";
import { useDispatch} from "react-redux";
import { AppDispatch } from "@/store/store";
import { query } from "@/query/characters";
import { getAnime } from "@/api/getAnime";
import {
  setData,
  setIsSearching,
} from "@/store/slices/characterSlice";
import type { CharactersResponse } from "@/types/types";


type Timeout = ReturnType<typeof globalThis.setTimeout>;

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<Timeout | null>(null);

  const handleSearch = useCallback(
    () => {
      const value = searchRef.current?.value ?? "";

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (!value) {
        dispatch(setData([]));
        return;
      }

      timeoutRef.current = setTimeout(async () => {
        try {
          dispatch(setIsSearching(true));

          const queryVal = query({
            search: value,
            page: 1,
            perPage: undefined
          });
          const res = (await getAnime(queryVal)) as CharactersResponse | null;
          const searchData = res?.Page?.characters || [];
          dispatch(setData(searchData));
        } catch (error) {
          console.error(error);
        } finally {
          dispatch(setIsSearching(false));
        }
      }, 1000);
    },
    [dispatch]
  );

  return (
    <div className="pt-12 flex justify-between flex-nowrap items-center">
      <div>
        <Input type="search" ref={searchRef} onInput={() => handleSearch()} />
      </div>
    </div>
  );
};

export { Search };
