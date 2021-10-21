import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Sidebar from '../../Sidebar';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main/Main';

import s from './adminPage.module.scss';

export default function AdminPage() {
  const history = useHistory();
  const userReducer = useTypedSelector((state) => state.userReducer);

  useLayoutEffect(() => {
    if (!userReducer.isAuth) {
      history.push('/');
    }
  }, [history, userReducer.isAuth]);

  return (
    <div className={s.adminPageWrapper}>
      <Sidebar />
      <div className={s.wrapper}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
