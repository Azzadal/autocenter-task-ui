import { AxiosRequestConfig } from 'axios';
import AxiosInstance from '../../../../axios-instace';
import { apiEndpointUrl } from '../../../../config';
import { ITradeInRequest } from '../model/trade-in';

class TradeInService {
  public async create(
    request: ITradeInRequest,
    options?: AxiosRequestConfig
  ): Promise<void> {
    return await AxiosInstance.post(`${apiEndpointUrl}/core/trade-in`, request, options);
  }
}

export default new TradeInService();
