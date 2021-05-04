import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useAuth0 } from '@auth0/auth0-react';

const Index: NextPage = () => {
  const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if (isLoading) return <>loading...</>;
  if (isAuthenticated) return <>signed in</>;

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
