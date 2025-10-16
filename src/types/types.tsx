export interface Media {
  title: {
    english: string;
    native: string;
  };
  description: string | TrustedHTML;
  countryOfOrigin: string;
  coverImage: {
    extraLarge: string;
    color: string | null;
  };
  bannerImage: string;
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
    name: string;
    rank: number;
  }>;
  relations: {
    nodes: Array<{
      bannerImage: string | null;
      title: {
        native: string | null;
        english: string | null;
      };
    }>;
  };
}

export interface PageItem {
  id: number;
  averageScore: number | null;
  meanScore: number | null;
  seasonYear: number | null;
  genres: string[];
  title: {
    english: string | null;
    native: string | null;
  };
  coverImage: {
    color: string | null;
    extraLarge: string;
    large: string;
  };
}

export interface PageData {
  media: PageItem[];
}

export interface PageResponse {
  Page: PageData;
}
