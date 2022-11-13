import { AxiosResponse } from 'axios';
import AxiosInstance from '../../axios-instace';
import { apiEndpointUrl } from '../../config';
import { IAuthInfo } from './types';

export type AuthResponse = { token: string };
type RegisterResponse = { status: string };

class AuthService {
  async register(request: IAuthInfo): Promise<RegisterResponse> {
    const { data } = await AxiosInstance.post(`${apiEndpointUrl}/auth/register`, request);
    return data;
  }

  async authorization(request: IAuthInfo): Promise<AuthResponse> {
    console.log('req', `${apiEndpointUrl}/auth`);
    // console.log('req', window);

    return AxiosInstance.post(`${apiEndpointUrl}/auth`, request).then(
      (response: AxiosResponse<AuthResponse>) => {
        localStorage.setItem('accessToken', response.data.token);
        localStorage.setItem('userInfo', request.login);
        return response.data;
      }
    );
  }
}

export const authservice = new AuthService();
