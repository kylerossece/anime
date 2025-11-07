"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { getAnime } from "@/api/getAnime";
import { query } from "@/query/page";
import Image from "next/image";
import Link from "next/link";
import type { PageItem, PageResponse } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { SearchPage } from "@/components/sections/searchPage";
import { Search } from "@/components/layout/search";
import { HoverCardItems } from "@/components/ui/hoverCardItems";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { CardLink } from "@/components/ui/cardLink";

interface PageProps {
  animeData: PageItem[];
  sort: string;
  lastPage: number;
}

const limit = 10;
const Category = ({ animeData, sort, lastPage }: PageProps) => {
  const [animeList, setAnimeList] = useState<PageItem[]>(animeData);
  const [page, setPage] = useState<number>(2);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const lastAnimeRef = useRef<HTMLDivElement | null>(null);
  const { data, isSearching, hasFilter } = useSelector(
    (state: RootState) => state.search
  );

  const fetchAnime = useCallback(async () => {
    if (page == lastPage) return;

    setIsLoading(true);
    try {
      const res = (await getAnime(
        query({ sortType: sort, page: page, perPage: limit })
      )) as PageResponse | null;
      const data = res?.Page?.media || [];
      if (page == lastPage) return;
      setAnimeList((current) => [...current, ...data]);
      setPage((page) => page + 1);
      console.log(page, limit);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [page, sort, lastPage]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (
        entries[0].isIntersecting &&
        !isSearching &&
        !hasFilter &&
        page < lastPage
      ) {
        fetchAnime();
      }
    });
    const lastAnime = lastAnimeRef.current;
    if (lastAnime) observer.observe(lastAnime);
    return () => {
      if (lastAnime) observer.unobserve(lastAnime);
    };
  }, [fetchAnime, animeList, hasFilter, isSearching]);

  return (
    <>
      <Search></Search>
      {isSearching || data.length > 0 || hasFilter ? (
        <SearchPage></SearchPage>
      ) : (
        <div className="!w-auto  grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-4 py-10 dark:text-gray-300">
          {animeList.map((item: PageItem, index: number) => (
            <div key={index}>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div
                    ref={index === animeList.length - 1 ? lastAnimeRef : null}
                  >
                    <CardLink item={item}></CardLink>
                  </div>
                </HoverCardTrigger>
                <HoverCardItems item={item}></HoverCardItems>
              </HoverCard>
            </div>
          ))}
          {isLoading &&
            page !== lastPage &&
            Array.from({ length: limit }, (_, index) => (
              <div key={index} className="w-[250px]">
                <div className="relative h-[350px] rounded-md">
                  <Skeleton className="h-full w-full " />
                </div>
                <Skeleton className="mt-3 h-3 w-[90%] rounded-md" />
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export { Category };
