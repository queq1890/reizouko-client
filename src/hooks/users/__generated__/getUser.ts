/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUser
// ====================================================

export interface getUser_user {
  name: string | null;
  email: string;
}

export interface getUser {
  user: getUser_user;
}

export interface getUserVariables {
  id: string;
}