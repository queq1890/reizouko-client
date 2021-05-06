import React, { useContext, useState, createContext, ReactNode } from 'react';

type User = {
  id: string;
  auth0_user_id: string;
};

export const CurrentUserContext = createContext<User | undefined>(undefined);
export const UpdateCurrentUserContext = createContext<(user: User) => void>(
  () => {
    // no op
  }
);

export const useCurrentUserContext = () => useContext(CurrentUserContext);
export const useUpdateCurrentUserContext = () =>
  useContext(UpdateCurrentUserContext);

export const CurrentUserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>();

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <UpdateCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </UpdateCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};
