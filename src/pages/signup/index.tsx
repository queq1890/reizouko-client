import React from 'react';
import { NextPage } from 'next';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const Signup: NextPage = () => {
  return <div>signup</div>;
};

export default withAuthenticationRequired(Signup, {
  returnTo: process.env.NEXT_PUBLIC_REIZOUKO_CLIENT_URL,
});
