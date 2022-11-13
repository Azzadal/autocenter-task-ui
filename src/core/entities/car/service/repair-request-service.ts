import { AxiosRequestConfig } from 'axios';
import AxiosInstance from '../../../../axios-instace';
import { apiEndpointUrl } from '../../../../config';
import { IRepairRequest } from '../model/repair-request';

class RepairRequestService {
  public async create(
    request: IRepairRequest,
    options?: AxiosRequestConfig
  ): Promise<void> {
    return await AxiosInstance.post(
      `${apiEndpointUrl}/core/repair-service`,
      request,
      options
    );
  }
}

export default new RepairRequestService();
