import { AxiosInstance } from 'axios';

import { ILoginCredentials } from './ts/definitions';

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

  logInUser = async (credentials: ILoginCredentials) => {
    const resp = await this.client.post('v1/client/login', credentials);
    return resp.data;
  };
}
