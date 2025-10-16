const query = (sortType: string) => {
  return `query  {
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
  }`;
};

export { query };
