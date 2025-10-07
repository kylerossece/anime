
export default async function Home() {
  const query = `
    query ($id: Int) {
      Media(id: $id, type: ANIME) {
        id
        title {
          romaji
          english
        }
        coverImage {
          large
        }
      }
    }
  `;

  const variables = { id: 1 };

  const res = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    cache: 'no-store', // prevents caching (optional)
  });

  const data = await res.json();

  const anime = data?.data?.Media;

  if (!anime) {
    return <p>Anime not found.</p>;
  }

  return (
    <main>
      <h1>{anime.title.english || anime.title.romaji}</h1>
      <img
        src={anime.coverImage.large}
        alt={anime.title.romaji}
        style={{ width: 200, height: 'auto' }}
      />
    </main>
  );
}