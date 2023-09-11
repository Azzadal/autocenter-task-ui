import { createAction } from '@reduxjs/toolkit';
import { IUserInfo } from '../entities/user/model/user';
import { AppDispatch, AppThunk } from '../../store/store';
import { authservice } from './auth-service';
import { userService } from '../entities/user/service/user-service';
import { notification } from 'antd';

export const setAccessToken = createAction<string | null>('@@auth/set-info');
export const setUserInfo = createAction<IUserInfo | null>('@@auth/set-user-info');

export function loginThunk(login: string, password: string): AppThunk<void> {
  return async function (dispatch: AppDispatch): Promise<void> {
    try {
      const user = await userService.getUserByLogin(login);
      const response = await authservice.authorization({ login, password });

      dispatch(setUserInfo(user));
      dispatch(setAccessToken(response.token));
      const fio = user.fio ?? '';
      notification.success({ message: `Привет ${fio ? fio.firstName : ''}` });
    } catch (err) {
      notification.error({ message: 'Ошибка входа!' });
    }
    dispatch(setUserInfo(null));
  };
}
