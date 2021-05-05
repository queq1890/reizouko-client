import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { useGetUserById } from '../../hooks/users/useGetUserById';

const Callback: NextPage = () => {
  const { isLoading, isAuthenticated, user } = useAuth0();
  const [userId, setUserId] = useState<Partial<string>>();
  const { data } = useGetUserById(userId);
  const router = useRouter();

  useEffect(() => {
    if (isLoading || !isAuthenticated) return;
    // console.log('hello');
    const id = user?.sub?.replace('auth0|', '');

    setUserId('608d47c7f805dd00697d06af');
  }, [isLoading, isAuthenticated, user, setUserId]);

  console.log(data);

  return null;
};

export default withAuthenticationRequired(Callback, {
  returnTo: process.env.NEXT_PUBLIC_REIZOUKO_CLIENT_URL,
});
