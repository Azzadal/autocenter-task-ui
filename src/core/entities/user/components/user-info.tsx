import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { IUserInfo } from '../../user/model/user';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken, setUserInfo as setUserInfoAction } from '../../../auth/actions';

export const UserInfoTopBar: React.FC = () => {
  const login = localStorage.getItem('userInfo') ?? '';
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const [token, setToken] = useState();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const stateFn = (state: any) => {
    return state;
  };

  const st = useSelector(stateFn);

  useEffect(() => {
    console.log('info', st);

    setUserInfo(st.user);
  }, [st]);

  // useEffect(() => {
  //   userService.getUserByLogin(login).then((userInfo) => setUserInfo(userInfo));
  // }, []);

  const handleExit = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');

    dispatch(setAccessToken(null));
    dispatch(setUserInfoAction(null));

    navigate('/');

    // window.location.replace('/');
    // window.location.reload();
  };

  return (
    <div className="user-info">
      {userInfo && `${userInfo?.id ?? ''} | ${userInfo.login} `}
      <Button
        style={{ backgroundColor: '#324d44', color: '#ffde3a' }}
        onClick={handleExit}
      >
        Выйти
      </Button>
    </div>
  );
};
