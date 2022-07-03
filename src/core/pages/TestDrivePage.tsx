import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { FormTestDriveType, TestDriveForm } from '../components/forms/test-drive-form';
import { ICarResponse } from '../entities/car/model/car';
import carService from '../entities/car/service/car-service';
import testDriveService from '../entities/car/service/test-drive-service';

export const TestDrivePage: React.FC = () => {
  const [cars, setCars] = useState<ICarResponse[]>([]);

  const headersAuth = {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  };

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
