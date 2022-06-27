import { useEffect, useState } from 'react';
import { ICarResponse } from '../entities/car/model/car';
import carService from '../entities/car/service/car-service';

export const CarPage: React.FC = () => {
  const [cars, setCars] = useState<ICarResponse>();

  useEffect(() => {
    const carQuery = carService.getAll().then((cars) => setCars(cars));

    console.log('cars', cars);
  });
  return <>123</>;
};
