import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ReactComponent as LoginLogo } from '../../assets/logo.svg';
import { login } from '../../redux/actions/userAction';

import s from './loginPage.module.scss';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const userReducer = useTypedSelector((state) => state.userReducer);

  useEffect(() => {
    if (userReducer.isAuth) {
      history.push('/admin');
    }
  }, [history, userReducer.isAuth]);

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <LoginLogo />
        <span className={s.title}>Need for drive</span>
      </div>
      <div className={s.formWrapper}>
        <div className={s.ttl}>Вход</div>
        <div className={s.form}>
          <div className={s.inputLabel}>Почта</div>
          <input
            value={username}
            type="text"
            placeholder="Введите Email"
            onChange={(event) => setUsername(event.target.value)}
            name="username"
          />

          <div className={s.inputLabel}>Пароль</div>
          <input
            value={password}
            type="password"
            placeholder="Введите пароль"
            onChange={(event) => setPassword(event.target.value)}
            name="password"
          />
        </div>
        <div className={s.footer}>
          <span>Запросить доступ</span>
          <button
            className={s.button}
            name="Войти"
            onClick={() => dispatch(login(username, password))}
          >
            <span> Войти</span>
          </button>
        </div>
      </div>
    </div>
  );
}
