import React from 'react';
import { NextPage } from 'next';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useCurrentUserContext } from '../../contexts/CurrentUser';
import { Layout } from '../../components/Layout';

const Dashboard: NextPage = () => {
  const currentUser = useCurrentUserContext();

  return (
    <Layout>
      <div>signed in as: {currentUser?.auth0_user_id}</div>
    </Layout>
  );
};

export default withAuthenticationRequired(Dashboard, {
  returnTo: process.env.NEXT_PUBLIC_REIZOUKO_CLIENT_URL,
});
