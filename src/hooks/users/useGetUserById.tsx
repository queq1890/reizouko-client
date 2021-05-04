import { gql } from 'graphql-request';
import { useGraphQLRequest } from '../useGraphQLRequest';

// TODO: query をauto generate する方法を考える
const query = gql`
  query getUser($id: String!) {
    user(id: $id) {
      name
      email
    }
  }
`;

export const useGetUserById = (id: string) => {
  const { data, error } = useGraphQLRequest(query, {
    id,
  });

  return {
    data,
    error,
  };
};
