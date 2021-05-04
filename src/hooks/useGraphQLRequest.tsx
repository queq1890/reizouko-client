import { useCallback, useMemo } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import useSWR from 'swr';
import { graphQLClient } from '../gateway/graphQLClient';

export const useGraphQLRequest = <T, U = undefined>(
  query: string,
  variables?: U
) => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const url = useMemo(() => (isLoading || !isAuthenticated ? null : query), [
    isLoading,
    isAuthenticated,
    query,
  ]);
  const fetcher = useCallback(
    async (query: string) => {
      const accessToken = await getAccessTokenSilently();
      const requestHeaders = {
        authorization: `Bearer ${accessToken}`,
      };

      const res = await graphQLClient.request<T>(
        query,
        variables,
        requestHeaders
      );
      return res;
    },
    [getAccessTokenSilently, graphQLClient]
  );

  const { data, error } = useSWR(url, fetcher);
  return { data, error };
};
