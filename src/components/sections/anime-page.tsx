"use client";
import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image";
import Link from "next/link";
import type { PageItem, PageResponse } from "@/types/types";

interface PageProps{
  animeData: PageItem[]
  sort: string
  lastPage: number
}

const AnimePage = ({animeData, sort,lastPage} : PageProps) => {

  const [animeList, setAnimeList] = useState<PageItem[]>(animeData);
  const [page, setPage] = useState<number>(2);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] =  useState<boolean>(false);
    // const [animeList, setAnimeList] = useState<PageItem[]>([])
    // const [isLoading, setIsLoading] = useState<boolean>(false)
    // const nextAnimeRef = useRef<null | unknown>(null);
 
    // const animeRef = useCallback(anime => {
    //   if (anime == null) return;
    //   const observer = new IntersectionObserver(entries => {
    //     if (entries[0].isIntersecting){
    //         observer.unobserve(anime)
    //     }
    //   })

    //   observer.observe(anime)
    // }, [])

   
        return (
                <div>
                  {JSON.stringify(animeData)}
                </div>
        )
}

export {AnimePage}