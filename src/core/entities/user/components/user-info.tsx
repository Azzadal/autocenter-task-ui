import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { headersAuth } from '../../../auth/config';
import { userService } from '../service/user-service';
import { IUserInfo } from '../../user/model/user';
import { useNavigate } from 'react-router-dom';

export const UserInfoTopBar: React.FC = () => {
  const login = localStorage.getItem('userInfo') ?? '';
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  let navigate = useNavigate();
  useEffect(() => {
    userService
      .getUserByLogin(login, {
        headers: headersAuth,
      })
      .then((userInfo) => setUserInfo(userInfo));
  }, []);

  const handleExit = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    navigate('/');

    // window.location.replace('/');
    window.location.reload();
  };

  return (
    <div className="user-info">
      {userInfo && `${userInfo?.id} | ${login} `}
      <Button
        style={{ backgroundColor: '#324d44', color: '#ffde3a' }}
        onClick={handleExit}
      >
        Выйти
      </Button>
    </div>
  );
};
