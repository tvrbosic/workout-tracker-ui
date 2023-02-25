import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { IUser } from '../ts/definitions';
import { useLocalStorage } from '../hooks/useLocalStorage';
import parseJwt from '../utils/parseJwt';

interface IAuthContext {
  token: string;
  user: IUser | null;
  setAuthToken: (token: string) => void;
  clearAuthToken: () => void;
}

const AuthContext = createContext<IAuthContext>({
  token: '',
  user: null,
  setAuthToken: () => {},
  clearAuthToken: () => {},
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
  const [token, setToken] = useState<string>('');

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
  const setAuthToken = (jwtToken: string) => {
    // TODO:
    // Add token as function param
    // Set token to local storage
    // Decode token to get user
    //setAppUser(user);
    setToken(jwtToken);
    localStorageController.setItem('token', JSON.stringify(token)); // TODO: replace user with token
  };

  // Clear user from state and token from local storage
  const clearAuthToken = () => {
    setAppUser(null);
    setToken('');
    localStorageController.setItem('token', '');
  };

  // Prepare context object which will be used and accessed throughout application
  // Memoize authContextObject to prevent unnecessary re-renders
  const authContextObject = useMemo(
    () => ({
      token,
      user: appUser,
      setAuthToken,
      clearAuthToken,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [appUser]
  );
  return <AuthContext.Provider value={authContextObject} {...children} />;
}
