import { AxiosRequestConfig } from 'axios';
import AxiosInstance from '../../../../axios-instace';
import { apiEndpointUrl } from '../../../../config';
import { ICarRequest, ICarResponse } from '../model/car';

class CarService {
  public async getAll(options?: AxiosRequestConfig): Promise<ICarResponse[]> {
    const { data } = await AxiosInstance.get(`${apiEndpointUrl}/core/car`, options);
    return data;
  }

  public async getById(id: number): Promise<ICarResponse> {
    const { data } = await AxiosInstance.get(`${apiEndpointUrl}/core/car/${id}`);
    return data;
  }

  public async create(request: ICarRequest): Promise<ICarResponse> {
    return await AxiosInstance.post(`${apiEndpointUrl}/core/car`, request);
  }

  public async delete(id: number) {
    await AxiosInstance.delete(`${apiEndpointUrl}/core/car/${id}`);
  }
}

export default new CarService();
