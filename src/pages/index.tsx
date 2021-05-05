import React from 'react';
import { NextPage } from 'next';
import { useAuth0 } from '@auth0/auth0-react';

const Index: NextPage = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <button
      onClick={() =>
        loginWithRedirect({
          appState: 'http://localhost:3000',
        })
      }
    >
      ログイン
    </button>
  );
};

export default Index;
