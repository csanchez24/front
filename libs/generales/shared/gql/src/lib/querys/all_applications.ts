import { gql } from '@apollo/client';

gql`
  query AllApplication {
    allApplication {
      id
      name
      image
      order
    }
  }
`;
