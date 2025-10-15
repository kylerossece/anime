import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { getPages } from "@/api/getPages";
import {Slider} from '@/components/sections/slider'
const Anime = async () => {

  // pageInfo {
  //   total
  //   currentPage
  //   lastPage
  //   hasNextPage
  //   perPage
  // }


  const query = (sortType: string) => {
    return  `query  {
    Page(page: 1, perPage: 25) {
      media(sort: ${sortType}) {
        
        averageScore
        title {
          english
          native
        }
        genres
        seasonYear
        coverImage {
          color
          large
        }
        meanScore
        id
      }
    }
  }`
  }
  let trendingData = await getPages(query("TRENDING_DESC"));
  trendingData = trendingData?.Page?.media || [];

  return (
    <Section>
      <Container>

      <Slider animeData={trendingData}></Slider>
      </Container>
    </Section>
  );
};

export { Anime };
