import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import {
  useCurrentUserContext,
  useUpdateCurrentUserContext,
} from '../../contexts/CurrentUser';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateUser } from '../../hooks/users/useCreateUser';
import { useRouter } from 'next/dist/client/router';
import { Layout } from '../../components/Layout';
import { useReidrectToDashboard } from '../../hooks/useRedirectToDashboard';

type FormValues = {
  name: string;
};

const Signup: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { data, executeQuery } = useCreateUser();
  const currentUser = useCurrentUserContext();
  const updateCurrentUser = useUpdateCurrentUserContext();

  useReidrectToDashboard();

  useEffect(() => {
    if (data) {
      updateCurrentUser(data.createUser);
      router.push('/dashboard');
    }
  }, [data]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (currentUser?.auth0UserId === undefined) return;
    const { name } = data;

    await executeQuery({
      auth0UserId: currentUser.auth0UserId,
      name,
    });
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} />
        <button type="submit">submit</button>
      </form>
    </Layout>
  );
};

export default withAuthenticationRequired(Signup, {
  returnTo: process.env.NEXT_PUBLIC_REIZOUKO_CLIENT_URL,
});
