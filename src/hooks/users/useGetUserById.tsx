import { gql } from 'graphql-request';
import { useGraphQLRequest } from '../useGraphQLRequest';
import { getUserVariables, getUser } from './__generated__/getUser';

const query = gql`
  query getUser($auth0UserId: String!) {
    user(auth0UserId: $auth0UserId) {
      id
      auth0UserId
    }
  }
`;

export const useGetUserById = () => {
  const { data, error, requestState, excecuteQuery } = useGraphQLRequest<
    getUser,
    getUserVariables
  >(query);

  return {
    data,
    error,
    requestState,
    excecuteQuery,
  };
};
