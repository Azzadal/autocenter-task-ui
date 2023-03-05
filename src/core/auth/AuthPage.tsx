import { Button, Card, Form, Input, Modal, notification } from 'antd';
import { useState } from 'react';
import { AuthResponse, authservice as authservice } from './auth-service';
import { useRegisterUser } from './hooks/queries';
import { IAuthInfo, IRegisterInfo } from './types';
import { useDispatch } from 'react-redux';
import { authstate } from './reducer';
import { setAccessToken, setUserInfo } from './actions';
import { userService } from '../entities/user/service/user-service';

interface IAuthProps {
  onCancel: () => void;
  onSubmit: (info: IAuthInfo) => void;
}

interface IRegisterProps {
  onCancel: () => void;
  onSubmit: (info: IRegisterInfo) => void;
}

interface ILoginProps {
  onSubmit?: (token: AuthResponse) => void;
}

export const LoginPage: React.FC<ILoginProps> = ({ onSubmit }) => {
  const [choice, setChoice] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>();

  const dispatch = useDispatch();

  const registerQuery = useRegisterUser();

  const authHandle = () => {
    setChoice('auth');
    setShowModal(true);
  };
  const registerHandle = () => {
    setChoice('reg');
    setShowModal(true);
  };

  const handleSubmit = async (info: IAuthInfo) => {
    if (choice == 'auth') {
      const user = await userService.getUserByLogin(info.login);
      console.log('user', user);

      const resp = await authservice.authorization(info);
      if (user) {
        dispatch(setUserInfo(user));
      }
      dispatch(setAccessToken(resp.token));
      const fio = user.FIO ?? '';
      notification.success({ message: `Привет ${fio}` });
    }

    choice === 'auth'
      ? onSubmit?.(await authservice.authorization(info))
      : registerQuery.mutate(info);
  };

  return (
    <Card>
      <Button onClick={authHandle}>Вход</Button>
      <Button onClick={registerHandle}>Регистрация</Button>
      <Modal visible={showModal} footer={null}>
        {choice === 'auth' ? (
          <AuthPage onSubmit={handleSubmit} onCancel={() => setShowModal(false)} />
        ) : choice === 'reg' ? (
          <RegisterPage onSubmit={handleSubmit} onCancel={() => setShowModal(false)} />
        ) : (
          <strong>1</strong>
        )}
      </Modal>
    </Card>
  );
};

const AuthPage: React.FC<IAuthProps> = ({ onSubmit, onCancel }) => {
  const dispatch = useDispatch();

  const handleFinish = (info: IAuthInfo) => {
    onSubmit(info);
    onCancel();
  };
  return (
    <Card>
      <Form<IAuthInfo> onFinish={handleFinish}>
        <Form.Item
          name={'login'}
          style={{
            marginBottom: '.2rem',
          }}
          rules={[
            {
              required: true,
              message: 'Введите логин',
            },
          ]}
        >
          <Input placeholder="Логин" type={'text'} />
        </Form.Item>
        <Form.Item
          name={'password'}
          rules={[
            {
              required: true,
              message: 'Введите пароль',
            },
          ]}
        >
          <Input placeholder="Пароль" type={'password'} />
        </Form.Item>
        <Form.Item
          style={{
            textAlign: 'end',
          }}
        >
          <Button onClick={onCancel} type="default" htmlType="submit">
            Отмена
          </Button>
          <Button type="primary" htmlType="submit">
            Вход
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

const RegisterPage: React.FC<IRegisterProps> = ({ onSubmit, onCancel }) => {
  const handleFinish = (info: IRegisterInfo) => {
    onSubmit(info);
    onCancel();
  };
  return (
    <Card>
      <Form<IRegisterInfo> onFinish={handleFinish}>
        <Form.Item
          name={'login'}
          style={{
            marginBottom: '.2rem',
          }}
        >
          <Input placeholder="Логин" type={'text'} />
        </Form.Item>
        <Form.Item name={'password'}>
          <Input placeholder="Пароль" type={'password'} />
        </Form.Item>
        <Form.Item name={'fio'}>
          <Input placeholder="ФИО" type={'text'} />
        </Form.Item>
        <Form.Item name={'birthDay'}>
          <Input placeholder="День рождения" type={'date'} />
        </Form.Item>
        <Form.Item name={'email'}>
          <Input placeholder="email" type={'email'} />
        </Form.Item>
        <Form.Item name={'address'}>
          <Input placeholder="Адрес" type={'text'} />
        </Form.Item>
        <Form.Item name={'telefon'}>
          <Input placeholder="Телефон" type={'tel'} />
        </Form.Item>
        <Form.Item
          style={{
            textAlign: 'end',
          }}
        >
          <Button onClick={onCancel} type="default" htmlType="submit">
            Отмена
          </Button>
          <Button type="primary" htmlType="submit">
            Регистрация
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
