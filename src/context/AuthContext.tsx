import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { IUser } from 'ts/definitions';
import { useLocalStorage } from 'hooks/useLocalStorage';
import parseJwt from 'utils/parseJwt';

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

  // On application start check if user token already exists in local storage and set it to context
  useEffect(() => {
    const token = localStorageController.getItem('token');
    if (token) {
      setToken(token);
    }
  }, [localStorageController]);

  // When token changes extract singed in user data and set to context
  useEffect(() => {
    if (token) {
      const user = parseJwt(token);
      setAppUser(user);
    }
  }, [token]);

  // Set user to state and local storage
  const setAuthToken = useCallback(
    (jwtToken: string) => {
      // Set token to app
      setToken(jwtToken);
      // Decode jwt token and set user data
      const user = parseJwt(token);
      setAppUser(user);
      // Set token to local storage
      localStorageController.setItem('token', jwtToken);
    },
    [token, localStorageController]
  );

  // Clear user from state and token from local storage
  const clearAuthToken = useCallback(() => {
    setToken('');
    setAppUser(null);
    localStorageController.setItem('token', '');
  }, [localStorageController]);

  // Prepare context object which will be used and accessed throughout application
  // Memoize authContextObject to prevent unnecessary re-renders
  const authContextObject = useMemo(
    () => ({
      token,
      user: appUser,
      setAuthToken,
      clearAuthToken,
    }),
    [token, appUser, setAuthToken, clearAuthToken]
  );
  return <AuthContext.Provider value={authContextObject} {...children} />;
}
