import React from 'react';
import { NextPage } from 'next';
import { useAuth0 } from '@auth0/auth0-react';

const Index: NextPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() =>
        loginWithRedirect({
          appState: 'http://localhost:3000',
        })
      }
    >
      login
    </button>
  );
};

export default Index;
