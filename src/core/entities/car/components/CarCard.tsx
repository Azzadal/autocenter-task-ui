import { Card } from 'antd';
import { ICarResponse } from '../model/car';

interface ICarCardProps {
  carInfo: ICarResponse;
}

export const CarCard: React.FC<ICarCardProps> = ({ carInfo }) => {
  return (
    <Card style={{ width: '300px', height: '200px' }}>
      <div className="car-card-image">Image</div>
      <div className="car-card-name">
        <p>{`${carInfo.mark.name}`}</p>
        <p>{`${carInfo.model.name}`}</p>
        <p>{`${carInfo.color}`}</p>
      </div>
      {/* <div className="car-card-info"></div> */}
    </Card>
  );
};
