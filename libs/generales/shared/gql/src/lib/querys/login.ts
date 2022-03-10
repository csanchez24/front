import { gql } from '@apollo/client';

gql`
  query Login($loginInput: AuthInput!) {
    login(loginInput: $loginInput) {
      token
    }
  }
`;
