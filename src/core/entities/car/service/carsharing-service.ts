import axios, { AxiosRequestConfig } from 'axios';
import { ICarSharingRequest } from '../model/test-drive';

class CarSharingService {
  public async create(
    request: ICarSharingRequest,
    options?: AxiosRequestConfig
  ): Promise<void> {
    return await axios.post(`http://localhost:8080/core/car-sharing`, request, options);
  }
}

export default new CarSharingService();
