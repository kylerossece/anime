interface charactersQuery {
  search?: string;
  perPage?: number;
  page?: number;
}

const query = ({ search, perPage, page }: charactersQuery) => {
  return `query ( $search:String = ${search ? `"${search}"` : null },$perPage: Int = ${perPage || 10000}, $page: Int = ${page || 1}) {
  Page(perPage: $perPage, page: $page) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
    }
    characters(search: $search, sort: [FAVOURITES_DESC]) {
      id
      name {
        full
      }
      image {
        large
      }
      description
      age
      siteUrl
      gender
      favourites
      dateOfBirth {
        year
        month
        day
      }
      bloodType
    }
  }
}`;
};

export { query };
