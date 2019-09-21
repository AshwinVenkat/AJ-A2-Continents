import gql from 'graphql-tag'

/**
 * Query to fetch all the continents
 */
export const ALL_CONTINENTS = gql`
query {
    continents {
      name
      code
    }
  }
`;

/**
 * Query to fetch details of a continent 
 * @param code: code of the selected continent - string format
 */
export const CONTINENT_DETAILS = gql`
query continentDetails($code: String){
    continent(code: $code) {
      name,
      code
      countries {
        code
        name
        phone
        native
        continent {
          code
          name
        }
        currency
        languages {
          code
          name
          native
          rtl
        }
        emoji
        emojiU
      }
    }
  }  
`;