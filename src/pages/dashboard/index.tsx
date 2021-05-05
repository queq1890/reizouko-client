import React from 'react';
import { NextPage } from 'next';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const Dashboard: NextPage = () => {
  return <div>dashboard</div>;
};

export default withAuthenticationRequired(Dashboard, {
  returnTo: process.env.NEXT_PUBLIC_REIZOUKO_CLIENT_URL,
});
