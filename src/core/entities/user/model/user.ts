enum Role {
  'ADMIN',
  'USER',
}

export interface IUserInfo {
  id: number;
  login: string;
  FIO: string;
  birthday: Date;
  email: string;
  address: string;
  telefon: string;
  role: Role;
}
