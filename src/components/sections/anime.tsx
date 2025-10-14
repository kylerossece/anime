import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { getPages } from "@/api/getPages";
const Anime = async () => {
  const query = `query  {
  Page(page: 1, perPage: 25) {
      pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media(sort: TRENDING_DESC) {
      
      averageScore
      title {
        english
        native
      }
      genres
      seasonYear
      bannerImage
      coverImage {
        color
        large
      }
      meanScore
      description
    }
  }
}`;
  const pages = await getPages(query);
  return (
    <Section>
      <Container>{JSON.stringify(pages)}</Container>
    </Section>
  );
};

export { Anime };
