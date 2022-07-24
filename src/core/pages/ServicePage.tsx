import { Card, notification } from 'antd';
import { useEffect, useState } from 'react';
import { headersAuth } from '../auth/config';
import { IServiceFormData, ServiceForm } from '../components/forms/service-form';
import repairRequestService from '../entities/car/service/repair-request-service';
import { userService } from '../entities/user/service/user-service';

export const ServicePage: React.FC = () => {
  const [userId, setUserId] = useState<number>(0);
  const login = localStorage.getItem('userInfo') ?? '';

  useEffect(() => {
    userService
      .getUserByLogin(login, {
        headers: headersAuth,
      })
      .then((userInfo) => setUserId(userInfo.id));
  }, []);

  const handleForm = (data: IServiceFormData) => {
    repairRequestService
      .create(
        { ...data, userId },
        {
          headers: headersAuth,
        }
      )
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
      <ServiceForm onSubmit={handleForm} />
    </Card>
  );
};
