import { notification } from 'antd';
import { useMutation } from 'react-query';
import { authservice } from '../auth-service';
import { IUseMutateQueryOptions } from '../../types';

export function useRegisterUser(options?: IUseMutateQueryOptions) {
  return useMutation(authservice.register, options);
}
