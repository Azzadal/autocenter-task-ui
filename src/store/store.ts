import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authInfoReducer, userInfoReduces } from '../core/auth/reducer';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
  auth: authInfoReducer,
  user: userInfoReduces,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
