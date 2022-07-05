import axios, { AxiosResponse } from 'axios';
import { IAuthInfo } from './types';

export type AuthResponse = { token: string };
type RegisterResponse = { status: string };

class AuthService {
  async register(request: IAuthInfo): Promise<RegisterResponse> {
    const { data } = await axios.post('http://localhost:8080/register', request);
    return data;
  }

  async authorization(request: IAuthInfo): Promise<AuthResponse> {
    return axios
      .post('http://localhost:8080/auth', request)
      .then((response: AxiosResponse<AuthResponse>) => {
        localStorage.setItem('accessToken', response.data.token);
        localStorage.setItem('userInfo', request.login);
        return response.data;
      });
  }
}

export const authservice = new AuthService();
