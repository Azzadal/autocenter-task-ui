import { createReducer } from '@reduxjs/toolkit';
import { IUserInfo } from '../entities/user/model/user';
import { setAccessToken, setUserInfo } from './actions';
import { getUserInfo } from './utils';

export type authstate = {
  accessToken: string | null;
  isAuthenticated: boolean;
};

const initial: authstate = {
  accessToken: localStorage.getItem('accessToken') || null,
  isAuthenticated: localStorage.getItem('accessToken') !== null,
};

export const authInfoReducer = createReducer(initial, (builder) => {
  builder.addCase(setAccessToken, (_, action) => ({
    accessToken: action.payload,
    isAuthenticated: action.payload != null,
  }));
});

export const userInfoReduces = createReducer<IUserInfo | null>(
  getUserInfo(),
  (builder) => {
    builder.addCase(setUserInfo, (_, action) => action.payload || null);
  }
);

// export const authInfoReducer = (state: authstate = initial, action: actionType) => {
//   switch (action.type) {
//     case 'SET_TOKEN':
//       return {
//         ...state,
//         accessToken: action.payload.accessToken,
//         isAuthenticated: action.payload.isAuthenticated,
//       } as authstate;
//     default:
//       return state;
//   }
// };
