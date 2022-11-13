import { Card, notification } from 'antd';
import { useEffect, useState } from 'react';
import { CarSharingForm, FormCarSharingType } from '../components/forms/carsharing-form';
import { ICarResponse } from '../entities/car/model/car';
import carService from '../entities/car/service/car-service';
import carsharingService from '../entities/car/service/carsharing-service';

export const CarSheringPage: React.FC = () => {
  const [cars, setCars] = useState<ICarResponse[]>([]);

  useEffect(() => {
    const carQuery = carService.getAll().then((cars) => setCars(cars));
  }, []);

  const handleCarSharingRequest = (data: FormCarSharingType) => {
    console.log(data);

    carsharingService
      .create({
        car_id: data.car_id,
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
      <CarSharingForm onSubmit={handleCarSharingRequest} cars={cars} />
    </Card>
  );
};
