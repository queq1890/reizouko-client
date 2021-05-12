/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createUser
// ====================================================

export interface createUser_createUser {
  id: string;
  auth0UserId: string;
  name: string;
}

export interface createUser {
  createUser: createUser_createUser;
}

export interface createUserVariables {
  auth0UserId: string;
  name: string;
}
