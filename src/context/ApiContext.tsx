import React, { useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react';

import axios from 'axios';
import Api from 'utils/api';
import { useAuthContext } from 'context/AuthContext';

interface IApiContextProviderProps {
  children?: React.ReactNode;
}

interface IBackendError {
  status: number;
  message?: string;
}

// Create axios object
const axiosClient = axios.create({ baseURL: process.env.REACT_APP_API_URL });

// Create API class instance which contains prepared API requests
const apiInstance = new Api(axiosClient);

// Create ApiContext
const ApiContext = React.createContext<{
  api: typeof apiInstance;
  error: IBackendError | null;
  clearError: () => void;
}>({
  api: apiInstance,
  error: null,
  clearError: () => {},
});

// Create and export context provider
export function ApiContextProvider({ ...children }: IApiContextProviderProps) {
  const { token, setAuthToken, clearAuthToken } = useAuthContext();
  const [error, setError] = useState<IBackendError | null>(null);

  const clearError = () => setError(null);

  // Executed before all other useEffect actions
  useLayoutEffect(() => {
    // Set authorization headers for every request and when token is updated
    apiInstance.setAuthorizationHeaders(token);
  }, [token]);

  useEffect(() => {
    // axiosClient response interceptor
    axiosClient.interceptors.response.use(
      // For any 2xx status just pass response
      (response) => response,
      // Handle statues other than 2xx (3xx, 4xx, 5xx)
      (error) => {
        const status = error.response.status;
        // 401 Unauthorized
        if (status === 401) {
          // Clear token and user from context and request headers
          clearAuthToken();
          apiInstance.setAuthorizationHeaders('');
        }
        // Set error object
        setError({ status: status as number, message: error.response?.data.detail });

        return Promise.reject(error);
      }
    );
  }, [setAuthToken, clearAuthToken]);

  // Memoize
  const contextValue = useMemo(() => ({ api: apiInstance, error, clearError }), [error]);

  return <ApiContext.Provider value={contextValue} {...children} />;
}

// Export custom hook to use ApiContext
export const useApiContext = () => useContext(ApiContext);
