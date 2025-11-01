interface QueryParams {
  sortType: string;
  page?: number;
  perPage?: number;
  type?: string;
  search?: string;
  genres?: string[];
  tags?: string[];
  season?: string;
  seasonYear?: number;
  format?: string[];
}

const query = ({
  sortType,
  page,
  perPage,
  type,
  search,
  genres,
  tags,
  season,
  seasonYear,
  format,
}: QueryParams): string => {
  const formatArray = (arr?: string[]) =>
    arr && arr.length ? `[${arr.map((v) => `"${v}"`).join(", ")}]` : "";
  const formatEnumArray = (arr?: string[]) =>
    arr && arr.length ? `[${arr.join(", ")}]` : "";
  const q = `query {
    Page(page: ${page ?? 1}, perPage: ${perPage ?? 50}) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
      }
      media(
        sort: ${sortType},
        type: ${type ?? "ANIME"},
        ${search ? `search: "${search.replace(/"/g, '\\"')}",` : ""}
        ${genres && genres.length ? `genre_in: ${formatArray(genres)},` : ""}
        ${tags && tags.length ? `tag_in: ${formatArray(tags)},` : ""}
        ${
          format && format.length
            ? `format_in: ${formatEnumArray(format)},`
            : ""
        }
        ${season ? `season: ${season},` : ""}
        ${seasonYear ? `seasonYear: ${seasonYear},` : ""}
      ) {
        id
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
        averageScore
      }
    }
  }`;

  return q;
};

export { query };
