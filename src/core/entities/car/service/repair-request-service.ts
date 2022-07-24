import axios, { AxiosRequestConfig } from 'axios';
import { IRepairRequest } from '../model/repair-request';

class RepairRequestService {
  public async create(
    request: IRepairRequest,
    options?: AxiosRequestConfig
  ): Promise<void> {
    return await axios.post(
      `http://localhost:8080/core/repair-service`,
      request,
      options
    );
  }
}

export default new RepairRequestService();
