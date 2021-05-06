import { useCallback, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { graphQLClient } from '../gateway/graphQLClient';
import { RequestState, REQUEST_STATE } from '../types/common';

export const useGraphQLRequest = <T, U = undefined>(query: string) => {
  const {
    isAuthenticated,
    isLoading: isAuth0Loading,
    getAccessTokenSilently,
  } = useAuth0();

  const [requestState, setRequestState] = useState<RequestState>(
    REQUEST_STATE.PENDING
  );
  const [data, setData] = useState<T>();
  const [error, setError] = useState<any>(); // TODO: type

  const excecuteQuery = useCallback(
    async (variables: U extends undefined ? never : U) => {
      if (isAuth0Loading || !isAuthenticated) return;

      try {
        setRequestState(REQUEST_STATE.LOADING);
        const accessToken = await getAccessTokenSilently();
        const requestHeaders = {
          authorization: `Bearer ${accessToken}`,
        };

        const result = await graphQLClient.request<T>(
          query,
          variables,
          requestHeaders
        );
        setData(result);
        setRequestState(REQUEST_STATE.FULFILLED);
      } catch (error) {
        setError(error);
        setRequestState(REQUEST_STATE.FAILED);
      }
    },
    [isAuth0Loading, isAuthenticated, getAccessTokenSilently, query]
  );

  return { data, error, excecuteQuery, requestState };
};
