import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { getAnime } from "@/api/getAnime";
import { Slider } from "@/components/sections/slider";
import { query } from "@/query/page";
import type { PageResponse } from "@/types/types";
const Anime = async () => {
  const data = (await getAnime(query("TRENDING_DESC"))) as PageResponse | null;
  if (!data) return;
  // @ts-ignore
  let trendingData = data?.Page?.media || [];

  return (
    <Section>
      <Container>
        <Slider animeData={trendingData}></Slider>
      </Container>
    </Section>
  );
};

export { Anime };
