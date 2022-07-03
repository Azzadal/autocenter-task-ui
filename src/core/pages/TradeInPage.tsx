import { Card } from 'antd';
import { TradeInForm } from '../components/forms/trade-in-form';

export const TradeInPage: React.FC = () => {
  return (
    <Card style={{ width: '50%', marginLeft: '25%', marginTop: '2rem' }}>
      <TradeInForm />
    </Card>
  );
};
