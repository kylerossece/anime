interface charactersQuery {
  search?: string;
  perPage?: number;
  page?: number;
}

const query = ({ search, perPage, page }: charactersQuery) => {
  return `query ($search: String) {
  Page(perPage: ${perPage || 50}, page: ${page || 1}) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
      }
    characters(search: ${search} sort: [FAVOURITES_DESC]) {
      name {
        full
      }
      image {
        large
      }
      id
     
    }
  }
}`;
};

export { query };
