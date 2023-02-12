import { AxiosInstance } from 'axios';

import { ILoginCredentials } from '../ts/ILoginCredentials';

export default class Api {
  authclient: AxiosInstance;
  dataClient: AxiosInstance;

  constructor(axiosAuthObj: AxiosInstance, axiosDataObj: AxiosInstance) {
    this.authclient = axiosAuthObj;
    this.dataClient = axiosDataObj;
  }

  setAuthorizationHeader = (token: string) => {
    this.authclient.defaults.headers.common.Authorization = `Bearer ${token}`;
    // Not needed for used data API
    // this.dataClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  logInUser = async (credentials: ILoginCredentials) => {
    const resp = await this.authclient.post('v1/client/login', credentials);
    return resp.data;
  };
}
