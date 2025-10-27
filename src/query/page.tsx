const query = (sortType: string, page?:number, perPage?: number) => {
    
  return `query  {
    Page(page: ${page || 1}, perPage: ${perPage || 50}) {
          pageInfo {
        total
        currentPage
        lastPage
        hasNextPage

      }
      media(sort: ${sortType}) {
          
        averageScore
        title {
          english
          native
          userPreferred
        }
        genres
        seasonYear
        coverImage {
          color
          large
          extraLarge
        }
        meanScore
        id
      }
    }
  }`;
};

export { query };
