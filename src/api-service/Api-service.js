import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

// initialize a GraphQL client
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

// write a GraphQL query that asks for names and codes for all countries


export const LIST_CONTINENTS = gql`
  {
    continents{
  code
  name
  countries {
      name
      code
      languages {
      code
      name
    }
    }
  }
  }
`;

