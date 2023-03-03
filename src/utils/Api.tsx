import { AxiosInstance } from 'axios';

import { ILoginCredentials } from 'ts/definitions';

export default class Api {
  client: AxiosInstance;
  externalDataClient: AxiosInstance;

  constructor(primaryAxiosClient: AxiosInstance, externalDataAxiosClient: AxiosInstance) {
    this.client = primaryAxiosClient;
    this.externalDataClient = externalDataAxiosClient;
  }

  setAuthorizationHeaders = (token: string) => {
    this.client.defaults.headers.common.Authorization = `Bearer ${token}`;
    // NOTE: External data client does not require authorization
  };

  login = async (credentials: ILoginCredentials) => {
    const response = await this.client.post('api/login/', credentials);
    return response.data;
  };
}
