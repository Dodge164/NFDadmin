import React, { useLayoutEffect } from 'react';
import Sidebar from '../../Sidebar';
import { useHistory } from 'react-router-dom';
import Header from '../Header';
import s from './adminPage.module.scss';
import Footer from '../Footer';
import Main from '../Main/Main';
import { useSelector } from 'react-redux';

export default function AdminPage() {
  const history = useHistory();
  const userReducer = useSelector((state) => state.userReducer);

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
