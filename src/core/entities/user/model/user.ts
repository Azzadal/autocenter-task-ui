enum Role {
  'ADMIN',
  'USER',
}

export type FIO = {
  firstName: string;
  lastName: string;
  surName: string;
};

export interface IUserInfo {
  id: number;
  login: string;
  fio: FIO;
  birthday: Date;
  email: string;
  address: string;
  telefon: string;
  role: Role;
}
