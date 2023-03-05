import { createAction } from '@reduxjs/toolkit';
import { IUserInfo } from '../entities/user/model/user';

export const setAccessToken = createAction<string | null>('@@auth/set-info');
export const setUserInfo = createAction<IUserInfo | null>('@@auth/set-user-info');
