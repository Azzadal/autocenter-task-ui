import axios, { AxiosRequestConfig } from 'axios';
import { IUserInfo } from '../model/user';

class UserService {
  public async getUserByLogin(
    login: string,
    options?: AxiosRequestConfig
  ): Promise<IUserInfo> {
    const { data } = await axios.get(`http://localhost:8080/users/${login}`, options);
    return data;
  }
}

export const userService = new UserService();
