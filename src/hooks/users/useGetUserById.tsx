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

export const useGetUserById = (id?: string) => {
  const { data, error } = useGraphQLRequest<getUser_user>(query, {
    auth0_user_id: id,
  });

  return {
    data,
    error,
  };
};
