export interface IAuthInfo {
  login: string;
  password: string;
}

export interface IRegisterInfo extends IAuthInfo {
  FIO: string;
  birthday: Date;
  email: string;
  address: string;
  telefon: string;
}
