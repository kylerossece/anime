"use client";
import { useCallback, useEffect, useRef, useState } from "react"
import {getAnime} from '@/api/getAnime';
import { query } from '@/query/page';
import Image from "next/image";
import Link from "next/link";
import type { PageItem, PageResponse } from "@/types/types";

interface PageProps{
  animeData: PageItem[]
  sort: string
  lastPage: number
}

const limit = 10
const AnimePage = ({animeData, sort,lastPage} : PageProps) => {

  const [animeList, setAnimeList] = useState<PageItem[]>(animeData);
  const [page, setPage] = useState<number>(2);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const lastAnimeRef = useRef<HTMLDivElement | null>(null);

  const fetchAnime = useCallback(async () => {
    if(page == lastPage) return;
    setIsLoading(true)
    try {
      const res = (await getAnime(query(sort, page, limit))) as PageResponse | null;
      const data = res?.Page?.media || [];
      if(page == lastPage) return;
      setAnimeList((current) => [...current, ...data])
      setPage((page) => page + 1);
    } catch(error){
      console.error(error)
    } finally {
      setIsLoading(false) 
    }
  }, [isLoading,page, sort, lastPage]);

  useEffect(() => {
    if(page == lastPage) return;

    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting){
        console.log("intersecting")
        fetchAnime();
      }
    })
    const lastAnime = lastAnimeRef.current
    if(lastAnime) observer.observe(lastAnime);
    return () => {
      if (lastAnime) observer.unobserve(lastAnime);
    };
  }, [fetchAnime, animeList])

   
        return (
          <>
          <div className="!w-auto flex justify-start items-baseline flex-wrap gap-3">
               {
                animeList.map((item: PageItem, index: number)=> (
                  <div key={index}           
                       ref={index === animeList.length - 1 ? lastAnimeRef : null}           
                       >
                                  <Link href={`anime/${item.id}`}>
                                      <div className="w-[250px]">
                                              <div className="relative h-[325px] shadow-lg rounded-md">
                                  
                                                <Image
                                                  src={item.coverImage.extraLarge}
                                                  alt={item.title.userPreferred || ""}
                                                  fill
                                                  className="object-cover rounded-md"
                                                  priority
                                                />
                                              </div>
                                              <p className="pt-2 ml-0.5 font-medium line-clamp-2 text-sm">{item.title.english || item.title.userPreferred || ''}</p>
                                            </div>
                                            </Link>
                                  
                  </div>
                ))
               }
               </div>
               </>
        )
}

export {AnimePage}