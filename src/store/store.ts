import { Action, AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { authInfoReducer, userInfoReduces } from '../core/auth/reducer';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
  auth: authInfoReducer,
  user: userInfoReduces,
});

export const store = configureStore({
  reducer: rootReducer,
});

type DispatchFunc = () => AppDispatch;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  undefined,
  Action<string>
>;
export const useAppDispatch: DispatchFunc = useDispatch;
