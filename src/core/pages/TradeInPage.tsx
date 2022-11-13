import { Card, notification } from 'antd';
import { FormTradeInType, TradeInForm } from '../components/forms/trade-in-form';
import tradeInService from '../entities/car/service/trade-in-service';

export const TradeInPage: React.FC = () => {
  const handleTradeInRequest = (data: FormTradeInType) => {
    tradeInService
      .create({
        connection: data.connection,
      })
      .then(() => {
        notification.open({
          message: 'Внимание!',
          description: 'Ваша заявка успешно принята',
          duration: 4,
        });
      });
  };
  return (
    <Card style={{ width: '50%', marginLeft: '25%', marginTop: '2rem' }}>
      <TradeInForm onSubmit={handleTradeInRequest} />
    </Card>
  );
};
