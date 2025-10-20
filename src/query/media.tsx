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
        userPreferred
        }
        description
        countryOfOrigin
        format
          favourites
            source
        season
        coverImage {
        extraLarge
        color
        }
            startDate {
      day
      month
      year
    }
         endDate {
      day
      month
      year
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
           relations {
      nodes {
         id
        type
        status
        source
        bannerImage
             coverImage {
          extraLarge
        }
        title {
          native
          english
          userPreferred
            }
        }
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
        id
        name
        rank
        }
    }
    }`;
};

export { query };
