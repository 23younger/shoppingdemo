import React, { ReactElement } from 'react';
import { ConnectProps, ConnectState, UserModelState } from '@/models/connect';
import { connect, Redirect } from 'umi';

interface SecurityLayoutProps extends ConnectProps {
  user: UserModelState;
  children: ReactElement;
}

const SecurityLayout: React.FC<SecurityLayoutProps> = ({
  user,
  children,
  location,
}) => {
  const { userid } = user.currentUser;
  const isLogin = !!userid;
  if (!isLogin) {
    // 没有登录，去登录页
    return (
      <Redirect
        to={{ pathname: '/login', state: { from: location.pathname } }}
      />
    );
  }
  return children;
};
export default connect(({ user }: ConnectState) => ({ user }))(SecurityLayout);
