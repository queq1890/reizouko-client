import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { useUpdateCurrentUserContext } from '../../contexts/CurrentUser';
import { useGetUserById } from '../../hooks/users/useGetUserById';
import { REQUEST_STATE } from '../../types/common';

const Callback: NextPage = () => {
  const {
    isLoading: isAuth0Loading,
    isAuthenticated,
    user: auth0User,
  } = useAuth0();
  const { data, error, executeQuery, requestState } = useGetUserById();
  const [auth0UserId, setAuth0UserId] = useState();
  const updateCurrentUser = useUpdateCurrentUserContext();
  const router = useRouter();

  useEffect(() => {
    if (isAuth0Loading || !isAuthenticated) return;
    const id = auth0User?.sub?.replace('auth0|', '');
    setAuth0UserId(id);
    executeQuery({ auth0UserId: id });
  }, [isAuth0Loading, isAuthenticated, auth0User]);

  useEffect(() => {
    if (requestState !== REQUEST_STATE.FULFILLED) return;

    updateCurrentUser(data?.user ?? { auth0UserId });
    const target = data?.user ? '/dashboard' : '/signup';
    router.push(target);
  }, [requestState, data]);

  return null;
};

export default withAuthenticationRequired(Callback, {
  returnTo: process.env.NEXT_PUBLIC_REIZOUKO_CLIENT_URL,
});
