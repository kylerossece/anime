'use client'
import { Slider } from "@/components/sections/slider";
import type { PageItem} from "@/types/types";
import { Search } from "@/components/layout/search"
import { useSelector } from "react-redux";
import { RootState} from "@/store/store";
import {SearchPage} from "@/components/sections/searchPage"
interface HomeProps {
    trendingData: PageItem[];
    popularData: PageItem[];
    topData: PageItem[];
}
const Main = ({trendingData, popularData,topData} : HomeProps) => {
    const { data, isSearching} = useSelector((state: RootState) => state.search);
 return (
    <>
    <Search></Search>
    { isSearching || data.length > 0  ? <SearchPage></SearchPage> :
    <>
    <Slider animeData={trendingData} title="Trending"></Slider>
    <Slider animeData={popularData} title="Popular"></Slider>
    <Slider animeData={topData} title="Top Rated"></Slider>
    </>
    }
    </>
 )
}

export { Main};