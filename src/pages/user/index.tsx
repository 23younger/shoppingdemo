import React, { useEffect } from 'react';
import { connect } from 'umi';
import { ConnectProps, ConnectState, UserModelState } from '@/models/connect';
import Header from './Header';
import MyList from './MyList';
import Logout from './Logout';

interface UserProps extends ConnectProps {
  user: UserModelState;
}
const User: React.FC<UserProps> = ({ user, location, dispatch }) => {
  useEffect(() => {
    dispatch({ type: 'user/queryDetail' });
  }, []);
  const { name, icon } = user.detail;
  const logout = () => {
    dispatch({ type: 'user/logout' });
  };
  return (
    <div>
      <Header name={name} icon={icon} />
      <MyList />
      <Logout logout={logout} />
    </div>
  );
};
export default connect(({ user }: ConnectState) => ({ user }))(User);
