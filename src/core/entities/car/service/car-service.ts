import axios from 'axios';
import { ICarRequest, ICarResponse } from '../model/car';

class CarService {
  public async getAll(): Promise<ICarResponse> {
    return await axios.get(`http://localhost:8080/core/car`);
  }

  public async getById(id: number): Promise<ICarResponse> {
    return await axios.get(`http://localhost:8080/core/car/${id}`);
  }

  public async create(request: ICarRequest): Promise<ICarResponse> {
    return await axios.post(`http://localhost:8080/core/car`, request);
  }

  public async delete(id: number) {
    await axios.delete(`http://localhost:8080/core/car/${id}`);
  }
}

export default new CarService();
