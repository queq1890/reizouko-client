import { useCallback, useMemo, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import useSWR from 'swr';
import { graphQLClient } from '../gateway/graphQLClient';

export const useGraphQLRequest = <T, U = undefined>(query: string) => {
  const {
    isAuthenticated,
    isLoading: isAuth0Loading,
    getAccessTokenSilently,
  } = useAuth0();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Partial<T>>();
  const [error, setError] = useState<any>(); // TODO: type

  const excecuteQuery = useCallback(
    async (variables?: U) => {
      if (isAuth0Loading || !isAuthenticated) return;

      try {
        setLoading(true);
        const accessToken = await getAccessTokenSilently();
        const requestHeaders = {
          authorization: `Bearer ${accessToken}`,
        };

        console.log({ variables });
        const result = await graphQLClient.request<T>(
          query,
          variables,
          requestHeaders
        );
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [isAuth0Loading, isAuthenticated, getAccessTokenSilently, query]
  );

  // const url = useMemo(() => (isLoading || !isAuthenticated ? null : query), [
  //   isLoading,
  //   isAuthenticated,
  //   query,
  // ]);
  // const fetcher = useCallback(
  //   async (query: string) => {
  //     const accessToken = await getAccessTokenSilently();
  //     const requestHeaders = {
  //       authorization: `Bearer ${accessToken}`,
  //     };

  //     const res = await graphQLClient.request<T>(
  //       query,
  //       variables,
  //       requestHeaders
  //     );
  //     return res;
  //   },
  //   [getAccessTokenSilently, graphQLClient]
  // );

  return { data, error, excecuteQuery, loading };
};
