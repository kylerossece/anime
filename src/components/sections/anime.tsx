import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { getAnime } from "@/api/getAnime";
import { Slider } from "@/components/sections/slider";
import { query } from "@/query/page";
import type { PageItem, PageResponse } from "@/types/types";

const Anime = async () => {
  const trending = (await getAnime(query("TRENDING_DESC"))) as PageResponse | null;
  const popular = (await getAnime(query("POPULARITY_DESC"))) as PageResponse | null;
  const top = (await getAnime(query("SCORE_DESC"))) as PageResponse | null;


  if (!trending) return;

 const trendingData: PageItem[] = trending?.Page?.media || [];
 const popularData: PageItem[] = popular?.Page?.media || [];
 const topData: PageItem[] = top?.Page?.media || [];


  return (
    <Section>
      <Container className="flex flex-col gap-3 pb-14">
        <Slider animeData={trendingData} title="Trending"></Slider>
        <Slider animeData={popularData} title="Popular"></Slider>
        <Slider animeData={topData} title="Top Rated"></Slider>
      </Container>
    </Section>
  );
};

export { Anime };