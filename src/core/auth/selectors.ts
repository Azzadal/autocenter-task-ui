import { RootState } from '../../store/store';
import { IUserInfo } from '../entities/user/model/user';

export const userSelector = (state: RootState): IUserInfo | null => {
  return state.user;
};
