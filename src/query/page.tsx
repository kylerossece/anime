const query = (sortType: string) => {
  return `query  {
    Page(page: 1, perPage: 50) {
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
