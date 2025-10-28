const query = (
  sortType: string, 
  page?:number, 
  perPage?: number, 
  type?:string, 
  search?:string,
  genres?: string,
  season?: string,
  seasonYear?: number,
  format?: string,
) => {
    
  return `query  {
    Page(page: ${page || 1}, perPage: ${perPage || 50}) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage

      }
      media(
          sort: ${sortType},type: ${type || 'ANIME'},      
          ${search ? `search: "${search}",` : ""}
          ${genres ? `genre_in: ${(genres)},` : ""}
          ${format ? `format_in: ${(format)},` : ""} 
          ${season ? `season: ${season},` : ""} 
          ${seasonYear ? `seasonYear: ${seasonYear},` : ""} 
          ) {
          
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
