import React, { ReactNode, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useUpdateCurrentUserContext } from '../contexts/CurrentUser';
import { useGetUserById } from '../hooks/users/useGetUserById';
import { REQUEST_STATE } from '../types/common';

export const Layout = ({ children }: { children: ReactNode }) => {
  const {
    isLoading: isAuth0Loading,
    isAuthenticated,
    user: auth0User,
  } = useAuth0();
  const { data, executeQuery, requestState } = useGetUserById();
  const [auth0UserId, setAuth0UserId] = useState();
  const updateCurrentUser = useUpdateCurrentUserContext();

  useEffect(() => {
    if (isAuth0Loading || !isAuthenticated) return;
    const id = auth0User?.sub?.replace('auth0|', '');
    setAuth0UserId(id);
    executeQuery({ auth0UserId: id });
  }, [isAuth0Loading, isAuthenticated, auth0User]);

  useEffect(() => {
    if (requestState !== REQUEST_STATE.FULFILLED) return;
    updateCurrentUser(data?.user ?? { auth0UserId });
  }, [requestState, data]);

  return <>{children}</>;
};
