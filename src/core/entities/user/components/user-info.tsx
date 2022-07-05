import { Button } from 'antd';

export const UserInfoTopBar: React.FC = () => {
  const login = localStorage.getItem('userInfo');
  console.log(login);

  const handleExit = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    window.location.reload();
  };

  return (
    <div className="user-info">
      {login}
      <Button onClick={handleExit}>Выйти</Button>
    </div>
  );
};
