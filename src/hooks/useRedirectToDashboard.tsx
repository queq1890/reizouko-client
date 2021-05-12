import { useEffect } from 'react';
import { useCurrentUserContext } from '../contexts/CurrentUser';
import { useRouter } from 'next/dist/client/router';

export const useReidrectToDashboard = () => {
  const router = useRouter();
  const currentUser = useCurrentUserContext();

  useEffect(() => {
    // assume that currentUser with id is already signed up
    if (currentUser?.id) router.push('/dashboard');
  }, [currentUser]);
};
