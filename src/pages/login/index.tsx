import React from 'react';
import styles from './index.less';
import { ConnectProps, ConnectState, UserModelState } from '@/models/connect';
import { connect, Redirect } from 'umi';

interface LoginProps extends ConnectProps {
  user: UserModelState;
}

const Login: React.FC<LoginProps> = ({ user, location, dispatch }) => {
  const { userid } = user.currentUser;
  console.log(userid);
  const isLogin = !!userid;
  if (isLogin) {
    const { from = '/' } = location.state || {};
    return <Redirect to={from} />;
  }
  return <div>登录</div>;
};

export default connect(({ user }: ConnectState) => ({ user }))(Login);
