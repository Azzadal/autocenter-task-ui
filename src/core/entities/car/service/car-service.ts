import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { ICarRequest, ICarResponse } from '../model/car';

class CarService {
  public async getAll(options?: AxiosRequestConfig): Promise<ICarResponse[]> {
    const { data } = await axios.get(`https://localhost:8080/core/car`, options);
    return data;
  }

  public async getById(id: number): Promise<ICarResponse> {
    const { data } = await axios.get(`https://localhost:8080/core/car/${id}`);
    return data;
  }

  public async create(request: ICarRequest): Promise<ICarResponse> {
    return await axios.post(`https://localhost:8080/core/car`, request);
  }

  public async delete(id: number) {
    await axios.delete(`https://localhost:8080/core/car/${id}`);
  }
}

export default new CarService();
