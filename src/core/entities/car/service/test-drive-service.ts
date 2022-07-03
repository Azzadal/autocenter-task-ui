import axios, { AxiosRequestConfig } from 'axios';
import { ITestDriveRequest } from '../model/test-drive';

class TestDriveService {
  // public async getAll(options?: AxiosRequestConfig): Promise<ICarResponse[]> {
  //   const { data } = await axios.get(`http://localhost:8080/core/car`, options);
  //   return data;
  // }

  // public async getById(id: number): Promise<ICarResponse> {
  //   const { data } = await axios.get(`http://localhost:8080/core/car/${id}`);
  //   return data;
  // }

  public async create(
    request: ITestDriveRequest,
    options?: AxiosRequestConfig
  ): Promise<void> {
    return await axios.post(`http://localhost:8080/core/test-drive`, request, options);
  }

  public async delete(id: number) {
    await axios.delete(`http://localhost:8080/core/car/${id}`);
  }
}

export default new TestDriveService();
