import { gql } from 'graphql-request';
import { useGraphQLRequest } from '../useGraphQLRequest';
import { getUserVariables, getUser_user } from './__generated__/getUser';

const query = gql`
  query getUser($auth0_user_id: String!) {
    user(auth0_user_id: $auth0_user_id) {
      id
      auth0_user_id
    }
  }
`;

export const useGetUserById = () => {
  const { data, error, loading, excecuteQuery } = useGraphQLRequest<
    getUser_user,
    getUserVariables
  >(query);

  return {
    data,
    error,
    loading,
    excecuteQuery,
  };
};
