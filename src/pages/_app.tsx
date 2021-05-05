import 'tailwindcss/tailwind.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { Auth0Provider } from '@auth0/auth0-react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={`${process.env.NEXT_PUBLIC_REIZOUKO_CLIENT_URL}/callback`}
      audience={process.env.NEXT_PUBLIC_AUTH0_AUDIENCE}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
};

export default MyApp;
