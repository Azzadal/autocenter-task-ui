import axios, { AxiosRequestConfig } from 'axios';
import { ITestDriveRequest } from '../model/test-drive';

class TestDriveService {
  public async create(
    request: ITestDriveRequest,
    options?: AxiosRequestConfig
  ): Promise<void> {
    return await axios.post(`http://localhost:8080/core/test-drive`, request, options);
  }
}

export default new TestDriveService();
