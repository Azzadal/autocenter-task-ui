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

  public async test(dataR: any) {
    const formData = new FormData();
    formData.append('file', dataR, 'file1.zip');
    const { data } = await AxiosInstance.post(
      `${apiEndpointUrl}/users/`,
      JSON.stringify(dataR),
      {
        headers: {
          'Content-Type':
            'multipart/form-data; boundary=<calculated when request is sent>',
        },
        responseType: 'arraybuffer',
      }
    );
  }
}

export const userService = new UserService();
