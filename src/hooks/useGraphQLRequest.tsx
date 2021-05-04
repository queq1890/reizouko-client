import { useAuth0 } from '@auth0/auth0-react';
import useSWR from 'swr';
import { graphQLClient } from '../gateway/graphQLClient';

export const useGraphQLRequest = (
  query: string,
  variables?: Record<string, unknown>
) => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const url = isLoading || !isAuthenticated ? null : query;

  const { data, error } = useSWR(url, async (query: string) => {
    const accessToken = await getAccessTokenSilently();
    const requestHeaders = {
      authorization: `Bearer ${accessToken}`,
    };

    const res = await graphQLClient.request(query, variables, requestHeaders);
    return res;
  });

  return { data, error };
};
