import { AxiosInstance } from 'axios';

import { ILoginCredentials, IExerciseFilters } from 'ts/definitions';

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

  getMuscles = async () => {
    const response = await this.client.get('api/v1/muscle/');
    return response.data;
  };

  getCategories = async () => {
    const response = await this.client.get('api/v1/category/');
    return response.data;
  };

  getDifficulties = async () => {
    const response = await this.client.get('api/v1/difficulty/');
    return response.data;
  };

  getExercises = async (
    filters: IExerciseFilters = { name: null, category: null, difficulty: null, muscle: null }
  ) => {
    const response = await this.client.get('api/v1/exercise/', {
      params: filters,
    });
    return response.data;
  };

  getWorkouts = async () => {
    const response = await this.client.get('api/v1/workout/');
    return response.data;
  };
}
