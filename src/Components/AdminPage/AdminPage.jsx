import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';
import s from './adminPage.module.scss';
import Footer from './Footer';
import Main from './Main';

export default function AdminPage() {
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
