import { Button, Table } from 'antd';
import { ColumnType } from 'antd/lib/table';
import { useEffect, useState } from 'react';
import { CarCard } from '../entities/car/components/CarCard';
import { ICarResponse } from '../entities/car/model/car';
import carService from '../entities/car/service/car-service';

export const CarPage: React.FC = () => {
  const [cars, setCars] = useState<ICarResponse[]>([]);

  useEffect(() => {
    const carQuery = carService
      .getAll({
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
      })
      .then((cars) => setCars(cars));
  }, []);

  console.log('cars', cars);
  const test: ICarResponse = {
    id: 1,
    mark: { name: 'test_mark' },
    model: { name: 'test_model' },
    color: 'green',
  };
  return (
    <div style={{ display: 'flex' }}>
      {cars.map((car) => {
        return <CarCard carInfo={car} />;
      })}
    </div>
  );
};
