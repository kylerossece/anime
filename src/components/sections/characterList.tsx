"use client";
import type { CharactersResponse, CharacterDetails} from "@/types/types";
import { useCallback, useEffect, useRef, useState } from "react";
import { getAnime } from "@/api/getAnime";
import { query } from "@/query/characters";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {SearchPage} from '@/components/sections/characterSearchPage';
import {Search} from '@/components/layout/characterSearch'
interface CharactersListProp{
    charactersData: CharacterDetails[]
    lastPage: number
}

const limit = 10;

const CharacterList = ({charactersData, lastPage} : CharactersListProp) => {
      const [charactersList, setCharactersList] = useState<CharacterDetails[]>(charactersData);
      const [page, setPage] = useState<number>(2);
      const [isLoading, setIsLoading] = useState<boolean>(false);
      const lastCharactersRef = useRef<HTMLDivElement | null>(null);
        const { data, isSearching } = useSelector(
          (state: RootState) => state.character
        );

      const fetchCharacters = useCallback(async () => {
        if (page == lastPage) return;
        setIsLoading(true);
        try {
            const res = (await getAnime(
                query({ page: page, perPage: limit })
              )) as CharactersResponse | null;
              const data = res?.Page?.characters || [];
              if (page == lastPage) return;
              setCharactersList((current) => [...current, ...data]);
              setPage((page) => page + 1)
        } catch (error){
            console.error(error);
        } finally {
            setIsLoading(false);
        }
      }, [page,lastPage])

      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          if (
            entries[0].isIntersecting &&
            page < lastPage
          ) {
            fetchCharacters();
          }
        });
        const lastCharacters = lastCharactersRef.current;
        if (lastCharacters) observer.observe(lastCharacters);
        return () => {
          if (lastCharacters) observer.unobserve(lastCharacters);
        };
      }, [fetchCharacters, charactersList, isSearching,lastPage, page ]);
    return (     
    <>
     <Search></Search>
      {isSearching || data.length > 0  ? (
        <SearchPage></SearchPage>
      ) :(
    <div className="!w-auto  grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-4 py-10 dark:text-gray-300 transition-colors duration-300 ease-in-out">
        {charactersList.map((item:CharacterDetails, index: number) => (
          <div key={index}>
                <div
                  ref={index === charactersList.length - 1 ? lastCharactersRef : null}
                >
                  <Link href={`/character/${item.id}`}>
      <div className="w-[250px] fade-animation">
        <div className="relative h-[325px] shadow-lg rounded-md">
          <Image
            src={item.image.large}
            alt={item.name.full}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 33vw, 
              250px"
          />
        </div>
        <p className="pt-2 ml-0.5 font-medium line-clamp-2 text-sm dark:text-gray-300 transition-colors duration-300 ease-in-out">
          {item.name.full}
        </p>
      </div>
    </Link>
                </div>
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
      </div>)
}
      </>)
}

export {CharacterList}