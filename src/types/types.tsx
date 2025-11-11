export interface Media {
  title: {
    english: string;
    native: string;
    userPreferred: string;
  };
  description: string | TrustedHTML;
  countryOfOrigin: string;
  coverImage: {
    extraLarge: string;
    color: string | null;
  };
  format: string;
  favourites: string;
  source: string;
  season: string;
  bannerImage: string;
  startDate: {
    day?: number;
    month?: number;
    year?: number;
  };
  endDate: {
    day?: number;
    month?: number;
    year?: number;
  };
  characters: {
    nodes: Array<{
      dateOfBirth: {
        day: number | null;
        month: number | null;
        year: number | null;
      } | null;
      image: {
        large: string;
      };
      name: {
        full: string;
      };
    }>;
  };
  duration: number | null;
  episodes: number | null;
  averageScore: number | null;
  trailer: {
    site: string;
    thumbnail: string;
  } | null;
  meanScore: number | null;
  popularity: number | null;
  rankings: Array<{
    allTime: boolean;
    context: string;
    format: string;
    id: number;
    rank: number;
    season: string | null;
    type: string;
    year: number | null;
  }>;
  genres: string[];
  status: string;
  studios: {
    nodes: Array<{
      name: string;
    }>;
  };
  stats: {
    scoreDistribution: Array<{
      amount: number;
      score: number;
    }>;
    statusDistribution: Array<{
      amount: number;
      status: string;
    }>;
  };
  tags: Array<{
    id: number;
    name: string;
    rank: number;
  }>;
  relations: {
    nodes: Array<{
      id: number;
      source: string | null;
      type: string;
      status: string;
      coverImage: {
        extraLarge: string;
      };
      bannerImage: string;
      title: {
        native: string;
        english: string;
        userPreferred: string;
      };
    }>;
  };
}

export interface PageItem {
  id: number;
  averageScore: number | null;
  meanScore: number | null;
  season: string;
  seasonYear: number | null;
  episodes: number | null;
  genres: string[];
  format: string;
  title: {
    english: string | null;
    native: string | null;
    userPreferred: string;
  };
  coverImage: {
    color: string | null;
    extraLarge: string;
    large: string;
  };
  nextAiringEpisode?: {
    timeUntilAiring: number;
    episode: number;
    airingAt: number;
    id: number;
  };
  studios: {
    edges: [
      {
        node: {
          name: string;
        };
        isMain: boolean;
      }
    ];
  };
}

export interface PageData {
  pageInfo: {
    total: number;
    currentPage: number;
    lastPage: number;
    hasNextPage: boolean;
  };
  media: PageItem[];
}

export interface PageResponse {
  Page: PageData;
}

export interface CharacterDetails {
  name?: string;
  image?: {
    large: string;
  };
  id: number;
}

export interface CharactersItem {
  characters: CharacterDetails[];
}
export interface CharactersData {
  pageInfo: {
    total: number;
    currentPage: number;
    lastPage: number;
    hasNextPage: boolean;
  };
  characters: CharactersItem[];
}

export interface CharactersResponse {
  Page: CharactersData;
}
