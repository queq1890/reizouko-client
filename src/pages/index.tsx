import React from 'react';
import { NextPage } from 'next';
import { useAuth0 } from '@auth0/auth0-react';
import { useReidrectToDashboard } from '../hooks/useRedirectToDashboard';
import { Layout } from '../components/Layout';

const Index: NextPage = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  useReidrectToDashboard();

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <Layout>
      <button
        onClick={() =>
          loginWithRedirect({
            appState: 'http://localhost:3000',
          })
        }
      >
        ログイン
      </button>
    </Layout>
  );
};

export default Index;
