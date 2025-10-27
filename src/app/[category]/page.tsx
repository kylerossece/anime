

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { AnimePage } from "@/components/sections/anime-page";
import {getAnime} from '@/api/getAnime';
import { query } from '@/query/page';
import type { PageItem, PageResponse } from "@/types/types";

interface PageProps {
  params: { category: 'trending' | 'popular' | 'top' };
}

export default async function Page({params}: PageProps){
  const {category} = await params;
  const categoryMap: Record<typeof category, string> = {
    trending: 'TRENDING_DESC',
    popular: 'POPULARITY_DESC',
    top: 'SCORE_DESC',
  } as const;
  const sort = categoryMap[category];

  const data = await (getAnime(query(sort,1,10))) as PageResponse | null;
  if (!category) return null;
  if (!data) return;
  
  const animeData:PageItem[] = data?.Page?.media || [];
  const lastPage = data?.Page?.pageInfo.lastPage;


return (
  <Section>
    <Container>
      <AnimePage animeData={animeData} lastPage={lastPage} sort={sort}  />
    </Container>
  </Section>
)

}