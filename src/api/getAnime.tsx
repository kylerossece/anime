const getAnime = async (
  query?: string,
  variables?: { [key: string]: any }
): Promise<unknown | null> => {
  try {
    const res = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    return data?.data || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getAnime };

// SCORE_DESC – Sort by highest average score

// SCORE – Sort by lowest average score

// POPULARITY_DESC – Most popular first

// POPULARITY – Least popular first

// TRENDING_DESC – Currently trending titles first

// TRENDING – Least trending first

// FAVOURITES_DESC – Most favorited by users

// FAVOURITES – Least favorited

// START_DATE_DESC – Newest first

// START_DATE – Oldest first

// TITLE_ROMAJI_DESC – Z-A Romaji title

// TITLE_ROMAJI – A-Z Romaji title
