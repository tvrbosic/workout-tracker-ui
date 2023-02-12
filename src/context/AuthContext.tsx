import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { IUser } from '../ts/IUser';
import { useLocalStorage } from '../hooks/useLocalStorage';
import parseJwt from '../utils/parseJwt';

interface IAuthContext {
  user: IUser | null;
  login: (user: IUser) => void;
  logout: (user: IUser) => void;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  login: () => {},
  logout: () => {},
});

// Export custom hook to use AuthContext
export const useAuthContext = () => useContext(AuthContext);

interface IAuthProviderProps {
  children?: React.ReactNode;
}

// Export AuthContextProvider wrapper (used in App.tsx)
export function AuthContextProvider({ ...children }: IAuthProviderProps) {
  const localStorageController = useLocalStorage();
  const [appUser, setAppUser] = useState<IUser | null>(null);

  // On application start check if user token already exists in local storage
  // Parse it and set logged in user
  useEffect(() => {
    const token = localStorageController.getItem('token');
    if (token) {
      const user = parseJwt(token);
      setAppUser(user);
    }
  }, [localStorageController]);

  // Set user to state and local storage
  const login = (user: IUser) => {
    // TODO: Get jwt from backend, decode it to get user while store token to localStorage
    // TODO: Token parameter
    // TODO: Decode token to get user
    setAppUser(user);
    // TODO: Set token, not user
    localStorageController.setItem('token', JSON.stringify(user));
  };

  // Clear user from state and local storage
  const logout = (user: IUser) => {
    setAppUser(null);
    localStorageController.setItem('token', '');
  };

  // Prepare context object which will be used and accessed throughout application
  // Memoize authContextObject to prevent unnecessary re-renders
  const authContextObject = useMemo(
    () => ({
      user: appUser,
      login,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [appUser]
  );
  return <AuthContext.Provider value={authContextObject} {...children} />;
}
