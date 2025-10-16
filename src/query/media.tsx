const query = () => {
  // pageInfo {
  //   total
  //   currentPage
  //   lastPage
  //   hasNextPage
  //   perPage
  // }
  return `query Title($mediaId: Int) {
    Media(id: $mediaId) {
        title {
        english
        native
        }
        description
        countryOfOrigin
        coverImage {
        extraLarge
        color
        }
        bannerImage
        characters {
        nodes {
            dateOfBirth {
            day
            month
            year
            }
            image {
            large
            }
            name {
            full
            }
        }
        }
        duration
        episodes
    
        averageScore
        trailer {
        site
        thumbnail
        }
        meanScore
        popularity
        rankings {
        allTime
        context
        format
        id
        rank
        season
        type
        year
        }
    
        genres
        status
    
        studios {
        nodes {
            name
        }
        }
        stats {
        scoreDistribution {
            amount
            score
        }
        statusDistribution {
            amount
            status
        }
        }
        tags {
        name
        rank
        }
    }
    }`;
};

export { query };
