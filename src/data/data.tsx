const season = ["WINTER", "SPRING", "SUMMER", "FALL"];

const format = [
  "TV",
  "TV_SHORT",
  "MOVIE",
  "SPECIAL",
  "OVA",
  "ONA",
  "MUSIC",
  "MANGA",
  "NOVEL",
  "ONE_SHOT",
];

const startYear = 1940;
const currentYear = new Date().getFullYear();

const years = Array.from(
  { length: currentYear - startYear + 1 },
  (_, i) => startYear + i
);

const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Ecchi",
  "Fantasy",
  "Horror",
  "Mahou Shoujo",
  "Mecha",
  "Music",
  "Mystery",
  "Psychological",
  "Romance",
  "Sci-Fi",
  "Slice of Life",
  "Sports",
  "Supernatural",
  "Thriller",
];
const tags = ["4-koma"];
export { season, format, years, genres, tags };
