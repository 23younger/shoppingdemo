import React, { useEffect } from 'react';
import BottomNav from '@/components/BottomNav';
import '@/static/iconfont/iconfont.css';
import styles from './BasicLayout.less';
import { Location, connect, Dispatch } from 'umi';
import { ConnectState, ConnectProps, UserModelState } from '@/models/connect';

interface BasicLayoutProps extends ConnectProps {
  user: UserModelState;
}
const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  console.log(props);
  const { children, location, user, dispatch } = props;
  const { pathname } = location;

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);
  return (
    <div className={styles.main}>
      {children}
      <footer>
        <BottomNav pathname={pathname} />
      </footer>
    </div>
  );
};
export default connect(({ user }: ConnectState) => ({ user }))(BasicLayout);
