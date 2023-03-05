import { AxiosRequestConfig } from 'axios';
import AxiosInstance from '../../../../axios-instace';
import { apiEndpointUrl } from '../../../../config';
import { IUserInfo } from '../model/user';

class UserService {
  public async getUserByLogin(
    login: string,
    options?: AxiosRequestConfig
  ): Promise<IUserInfo> {
    const { data } = await AxiosInstance.get(`${apiEndpointUrl}/users/${login}`, options);
    return data;
  }
}

export const userService = new UserService();
