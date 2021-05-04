import { GraphQLClient as GraphQLReuqestClient } from 'graphql-request';

export const graphQLClient = new GraphQLReuqestClient(
  process.env.NEXT_PUBLIC_REIZOUKO_API_URL
);
