import React, { useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react';

import axios from 'axios';
import Api from '../utils/Api';
import { useAuthContext } from './AuthContext';

interface IApiContextProviderProps {
  children?: React.ReactNode;
}

interface IBackendError {
  status: number;
  message?: string;
}

const primaryAxiosClient = axios.create({ baseURL: process.env.REACT_APP_PRIMARY_API_URL });
const externalDataAxiosClient = axios.create({
  baseURL: process.env.REACT_APP_EXTERNAL_DATA_API_URL,
});
const apiInstance = new Api(primaryAxiosClient, externalDataAxiosClient);

const ApiContext = React.createContext<{
  api: typeof apiInstance;
  error: IBackendError | null;
  resetError: () => void;
}>({
  api: apiInstance,
  error: null,
  resetError: () => {},
});

// Export custom hook to use ApiContext
export const useApiContext = () => useContext(ApiContext);

export function ApiContextProvider({ ...children }: IApiContextProviderProps) {
  const { token, setAuthToken } = useAuthContext();
  const [error, setError] = useState<IBackendError | null>(null);

  const resetError = () => setError(null);

  useLayoutEffect(() => {
    // Set authorization headers for every request
    apiInstance.setAuthorizationHeaders(token);
  }, [token]);

  useEffect(() => {
    console.log('TODO');
    // TODO:
    // Intercept response:
    // Status 200 - pass request
    // Status 401 - clear token and unauthorize user
    // Other statuses (4xx, 5xx) - set error object
  }, []);

  // TODO: Comment
  const contextValue = useMemo(() => ({ api: apiInstance, error, resetError }), [error]);

  return <ApiContext.Provider value={contextValue} {...children} />;
}
