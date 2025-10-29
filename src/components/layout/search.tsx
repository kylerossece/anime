"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef, useCallback, useState } from "react";
import {
    Sheet,
    // SheetClose,
    SheetContent,
    SheetDescription,
    // SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { useDispatch} from "react-redux";
//   , useSelector 
// RootState,
import {  AppDispatch } from "@/store/store";
import { query } from "@/query/page";
import { getAnime } from "@/api/getAnime";
import { setData,setIsSearching } from '@/store/slices/searchSlice';
import type {  PageResponse } from "@/types/types";

type Timeout = ReturnType<typeof globalThis.setTimeout>;
const Search = () => {
    const [timeoutId, setTimeoutId] = useState<Timeout | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    // const { data, isSearching} = useSelector((state: RootState) => state.search);

    const searchRef = useRef<HTMLInputElement>(null);

    const handleSearch = useCallback(async () => {
        const value = searchRef.current?.value ?? '';
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if(!value) return dispatch(setData([]));
        const newTimeoutId = setTimeout(async () => {
            try {
                dispatch(setIsSearching(true));
                const res = await getAnime(query({sortType: 'TITLE_ENGLISH_DESC',search: value, page: 1})) as PageResponse | null;
                const searchData = res?.Page?.media || [];
                dispatch(setData(searchData));

            } catch (error){
                console.error(error);
            } finally {
                dispatch(setIsSearching(false));
            }
        }, 1000)

        setTimeoutId(newTimeoutId);

       
    }, [dispatch,timeoutId]);
    return (

    <div className="pt-12 flex justify-between flex-nowrap">
        <div>
        <Input ref={searchRef} onInput={handleSearch}  />
        </div>
        <Sheet>
        <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
      <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div>Test</div>
      </SheetContent>
      </Sheet>   
    </div>)
}

export {Search}