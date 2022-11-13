import { notification } from 'antd';
import { useMutation } from 'react-query';
import { authservice } from '../auth-service';

export function useRegisterUser() {
  return useMutation(authservice.register, {
    onError: (_, variables) => {
      notification.error({
        message: `Пользователь с именем ${variables.login} уже существует`,
      });
    },
  });
}
