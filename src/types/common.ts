export type RequestState = 'pending' | 'loading' | 'fulfilled' | 'failed';
export const REQUEST_STATE: Record<Uppercase<RequestState>, RequestState> = {
  PENDING: 'pending',
  LOADING: 'loading',
  FULFILLED: 'fulfilled',
  FAILED: 'failed',
} as const;
