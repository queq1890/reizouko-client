import { gql } from 'graphql-request';
import { useGraphQLRequest } from '../useGraphQLRequest';
import { getUserVariables, getUser_user } from './__generated__/getUser';

const query = gql`
  query getUser($id: String!) {
    user(id: $id) {
      name
      email
    }
  }
`;

export const useGetUserById = (id: string) => {
  const { data, error } = useGraphQLRequest<getUser_user, getUserVariables>(
    query,
    {
      id,
    }
  );

  return {
    data,
    error,
  };
};
