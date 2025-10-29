import { Slider } from "@/components/sections/slider";
import type { PageItem} from "@/types/types";
import { Search } from "@/components/layout/search"
interface HomeProps {
    trendingData: PageItem[];
    popularData: PageItem[];
    topData: PageItem[];
}
const Main = ({trendingData, popularData,topData} : HomeProps) => {
 return (
    <>
    <Search></Search>
    <Slider animeData={trendingData} title="Trending"></Slider>
    <Slider animeData={popularData} title="Popular"></Slider>
    <Slider animeData={topData} title="Top Rated"></Slider>
    </>
 )
}

export { Main};