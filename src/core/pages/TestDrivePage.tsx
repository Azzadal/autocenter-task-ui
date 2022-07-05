import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { headersAuth } from '../auth/config';
import { FormTestDriveType, TestDriveForm } from '../components/forms/test-drive-form';
import { ICarResponse } from '../entities/car/model/car';
import carService from '../entities/car/service/car-service';
import testDriveService from '../entities/car/service/test-drive-service';

export const TestDrivePage: React.FC = () => {
  const [cars, setCars] = useState<ICarResponse[]>([]);

  useEffect(() => {
    const carQuery = carService
      .getAll({
        headers: headersAuth,
      })
      .then((cars) => setCars(cars));
  }, []);

  const handleTestDriveRequest = (data: FormTestDriveType) => {
    testDriveService.create(
      {
        car_id: data.car_id,
        connection: data.connection,
        testDriveDate: new Date(),
      },
      {
        headers: headersAuth,
      }
    );
  };

  return (
    <Card style={{ width: '50%', marginLeft: '25%', marginTop: '2rem' }}>
      <TestDriveForm onSubmit={handleTestDriveRequest} cars={cars} />
    </Card>
  );
};
