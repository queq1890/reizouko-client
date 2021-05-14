/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUser
// ====================================================

export interface getUser_user_fridge_foods_kinds_kind {
  name: string;
}

export interface getUser_user_fridge_foods_kinds {
  kind: getUser_user_fridge_foods_kinds_kind;
}

export interface getUser_user_fridge_foods_categories_category {
  name: string;
}

export interface getUser_user_fridge_foods_categories {
  category: getUser_user_fridge_foods_categories_category;
}

export interface getUser_user_fridge_foods {
  id: string;
  expirationDate: any | null;
  purchaseDate: any;
  kinds: getUser_user_fridge_foods_kinds[];
  categories: getUser_user_fridge_foods_categories[];
}

export interface getUser_user_fridge {
  id: string;
  foods: getUser_user_fridge_foods[];
}

export interface getUser_user {
  id: string;
  auth0UserId: string;
  fridge: getUser_user_fridge | null;
}

export interface getUser {
  user: getUser_user;
}

export interface getUserVariables {
  auth0UserId: string;
}
