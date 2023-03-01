import React, { useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react';

import axios from 'axios';
import Api from 'utils/Api';
import { useAuthContext } from 'context/AuthContext';

interface IApiContextProviderProps {
  children?: React.ReactNode;
}

interface IBackendError {
  status: number;
  message?: string;
}

// Create axios object for each used API (application API, third party API with exercises)
const primaryAxiosClient = axios.create({ baseURL: process.env.REACT_APP_PRIMARY_API_URL });
const externalDataAxiosClient = axios.create({
  baseURL: process.env.REACT_APP_EXTERNAL_DATA_API_URL,
});

// Create API class instance which contains prepared API requests
const apiInstance = new Api(primaryAxiosClient, externalDataAxiosClient);

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

// Export custom hook to use ApiContext
export const useApiContext = () => useContext(ApiContext);

// Create and export context provider
export function ApiContextProvider({ ...children }: IApiContextProviderProps) {
  const { token, setAuthToken } = useAuthContext();
  const [error, setError] = useState<IBackendError | null>(null);

  const clearError = () => setError(null);

  // Executed before all other useEffect actions
  useLayoutEffect(() => {
    // Set authorization headers for every request and when token is updated
    apiInstance.setAuthorizationHeaders(token);
  }, [token]);

  useEffect(() => {
    // primaryAxiosClient response interceptor
    primaryAxiosClient.interceptors.response.use(
      // For any 2xx status just pass response
      (response) => response,
      // Handle statues other than 2xx (3xx, 4xx, 5xx)
      (error) => {
        // TODO: Remove after testing
        console.log(error);

        const status = error.status;
        // 401 Unauthorized
        if (status === 401) {
          // Clear token from context and request headers
          setAuthToken('');
          apiInstance.setAuthorizationHeaders('');
        }
        // TODO: Test and check if message location was guessed correctly
        // Set error object
        setError({ status: status as number, message: error.response?.data.message });

        return Promise.reject(error);
      }
    );

    // externalDataAxiosClient response interceptor
    externalDataAxiosClient.interceptors.response.use(
      // For any 2xx status just pass response
      (response) => response,
      // Handle statues other than 2xx (3xx, 4xx, 5xx)
      (error) => {
        // TODO: Remove after testing
        console.log(error);
        // TODO: Test and check if message location was guessed correctly
        // Set error object
        setError({ status: error.status as number, message: error.response?.data.message });

        return Promise.reject(error);
      }
    );
  }, [setAuthToken]);

  // Memoize
  const contextValue = useMemo(() => ({ api: apiInstance, error, clearError }), [error]);

  return <ApiContext.Provider value={contextValue} {...children} />;
}
