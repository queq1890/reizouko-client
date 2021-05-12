export type RequestState = 'pending' | 'loading' | 'fulfilled';
export const REQUEST_STATE: Record<Uppercase<RequestState>, RequestState> = {
  PENDING: 'pending',
  LOADING: 'loading',
  FULFILLED: 'fulfilled',
} as const;
