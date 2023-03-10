import { AxiosInstance } from 'axios';

import { ILoginCredentials } from 'ts/definitions';

export default class Api {
  client: AxiosInstance;

  constructor(axiosClient: AxiosInstance) {
    this.client = axiosClient;
  }

  setAuthorizationHeaders = (token: string) => {
    this.client.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  login = async (credentials: ILoginCredentials) => {
    const response = await this.client.post('api/v1/login/', credentials);
    return response.data;
  };

  getCategories = async () => {
    const response = await this.client.get('api/v1/category/');
    return response.data;
  };

  getWorkouts = async () => {
    const response = await this.client.get('api/v1/workout/');
    return response.data;
  };
}
