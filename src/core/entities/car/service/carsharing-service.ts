import { AxiosRequestConfig } from 'axios';
import AxiosInstance from '../../../../axios-instace';
import { apiEndpointUrl } from '../../../../config';
import { ICarSharingRequest } from '../model/test-drive';

class CarSharingService {
  public async create(
    request: ICarSharingRequest,
    options?: AxiosRequestConfig
  ): Promise<void> {
    return await AxiosInstance.post(
      `${apiEndpointUrl}/core/car-sharing`,
      request,
      options
    );
  }
}

export default new CarSharingService();
