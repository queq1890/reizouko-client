/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_AUTH0_DOMAIN: string;
    readonly NEXT_PUBLIC_AUTH0_CLIENT_ID: string;
    readonly NEXT_PUBLIC_REIZOUKO_CLIENT_URL: string;
    readonly NEXT_PUBLIC_AUTH0_AUDIENCE: string;
    readonly NEXT_PUBLIC_REIZOUKO_API_URL: string;
  }
}
