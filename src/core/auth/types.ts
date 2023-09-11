import { FIO } from '../entities/user/model/user';

export interface IAuthInfo {
  login: string;
  password: string;
}

export interface IRegisterInfo extends IAuthInfo {
  firstName: string;
  lastName: string;
  surName: string;
  birthday: Date;
  email: string;
  address: string;
  telefon: string;
}
export interface IRegisterRequest
  extends Omit<IRegisterInfo, 'firstName' | 'lastName' | 'surName'> {
  fio: FIO;
}
