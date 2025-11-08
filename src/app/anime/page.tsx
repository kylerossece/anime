import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { getAnime } from "@/api/getAnime";
import { Main } from "@/components/sections/main";
import { query } from "@/query/page";
import type { PageItem, PageResponse } from "@/types/types";

export default async function Page() {
  const trending = (await getAnime(
    query({ sortType: "TRENDING_DESC", page: 1, perPage: 50 })
  )) as PageResponse | null;
  const popular = (await getAnime(
    query({ sortType: "POPULARITY_DESC", page: 1, perPage: 50 })
  )) as PageResponse | null;
  const top = (await getAnime(
    query({ sortType: "SCORE_DESC", page: 1, perPage: 50 })
  )) as PageResponse | null;

  if (!trending) return;

  const trendingData: PageItem[] = trending?.Page?.media || [];
  const popularData: PageItem[] = popular?.Page?.media || [];
  const topData: PageItem[] = top?.Page?.media || [];

  return (
    <Section>
      <Container className="flex flex-col gap-3 pb-14">
        <Main
          trendingData={trendingData}
          popularData={popularData}
          topData={topData}
        />
      </Container>
    </Section>
  );
}
