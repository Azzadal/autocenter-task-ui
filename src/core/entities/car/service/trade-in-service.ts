import axios, { AxiosRequestConfig } from 'axios';
import { ITradeInRequest } from '../model/trade-in';

class TradeInService {
  public async create(
    request: ITradeInRequest,
    options?: AxiosRequestConfig
  ): Promise<void> {
    return await axios.post(`https://localhost:8080/core/trade-in`, request, options);
  }
}

export default new TradeInService();
