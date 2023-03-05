import { IUserInfo } from '../entities/user/model/user';
import { IAuthInfo } from './types';

export function getUserInfo(): IUserInfo | null {
  const rawData = localStorage.getItem('userInfo');
  if (!rawData) {
    return null;
  }
  console.log('rawData', rawData);

  const userInfo = JSON.parse(rawData) as IUserInfo;
  return userInfo;
}
