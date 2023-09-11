import { Button, Card, Form, Input, Modal, notification } from 'antd';
import { useState } from 'react';
import { AuthResponse, authservice as authservice } from './auth-service';
import { useRegisterUser } from './hooks/queries';
import { IAuthInfo, IRegisterInfo, IRegisterRequest } from './types';
import { useDispatch } from 'react-redux';
import { authstate } from './reducer';
import { loginThunk, setAccessToken, setUserInfo } from './actions';
import { userService } from '../entities/user/service/user-service';
import { AppThunkDispatch } from '../../store/store';

interface IAuthProps {
  onCancel: () => void;
  onSubmit: (info: IRegisterInfo) => void;
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
  const [showModal, setShowModal] = useState<boolean>(false);

  const dispatch: AppThunkDispatch = useDispatch();

  const registerQuery = useRegisterUser({
    onSuccess: (data) => {},
    onError: (err) => {
      notification.error({
        // message: `Пользователь с именем ${variables.login} уже существует`,
        message: err.message,
      });
    },
  });

  const authHandle = () => {
    setChoice('auth');
    setShowModal(true);
  };
  const registerHandle = () => {
    setChoice('reg');
    setShowModal(true);
  };

  const handleSubmit = async (info: IRegisterInfo) => {
    if (choice == 'auth') {
      dispatch(loginThunk(info.login, info.password));
    }

    let infreg = {} as IRegisterRequest;
    if (choice !== 'auth') {
      infreg = {
        ...info,
        fio: {
          firstName: info.firstName,
          lastName: info.lastName,
          surName: info.surName,
        },
      };
      console.log('infreg', info);
    }

    choice === 'auth'
      ? onSubmit?.(await authservice.authorization(info))
      : registerQuery.mutate(infreg);
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
        <Form.Item>
          <Form.Item name="firstName">
            <Input placeholder="Ф" type={'text'} />
          </Form.Item>
          <Form.Item name="lastName">
            <Input placeholder="И" type={'text'} />
          </Form.Item>
          <Form.Item name="surName">
            <Input placeholder="О" type={'text'} />
          </Form.Item>
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
