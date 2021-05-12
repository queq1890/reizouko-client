import { gql } from 'graphql-request';
import { useGraphQLRequest } from '../useGraphQLRequest';
import { createUser, createUserVariables } from './__generated__/createUser';

const query = gql`
  mutation createUser($auth0UserId: String!, $name: String!) {
    createUser(auth0UserId: $auth0UserId, name: $name) {
      id
      auth0UserId
      name
    }
  }
`;

export const useCreateUser = () => {
  const { data, error, requestState, executeQuery } = useGraphQLRequest<
    createUser,
    createUserVariables
  >(query);

  return {
    data,
    error,
    requestState,
    executeQuery,
  };
};
