import { gql } from 'graphql-request';
import { useGraphQLRequest } from '../useGraphQLRequest';
import { getUserVariables, getUser } from './__generated__/getUser';

const query = gql`
  query getUser($auth0UserId: String!) {
    user(auth0UserId: $auth0UserId) {
      id
      auth0UserId
      fridge {
        id
        foods {
          id
          expirationDate
          purchaseDate
          kinds {
            kind {
              name
            }
          }
          categories {
            category {
              name
            }
          }
        }
      }
    }
  }
`;

export const useGetUserById = () => {
  const { data, error, requestState, executeQuery } = useGraphQLRequest<
    getUser,
    getUserVariables
  >(query);

  return {
    data,
    error,
    requestState,
    executeQuery,
  };
};
