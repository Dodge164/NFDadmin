import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as LoginLogo } from '../../assets/logo.svg';
import { login } from '../../redux/actions/user';
import Input from '../../utils/input';
import s from './loginPage.module.scss';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <LoginLogo />
        <span className={s.title}>Need for drive</span>
      </div>
      <form className={s.formWrapper}>
        <div className={s.ttl}>Вход</div>
        <div className={s.form}>
          <div className={s.inputLabel}>Почта</div>
          <Input
            label="Email"
            name="username"
            placeholder="Введите Email"
            // value={email}
            // setValue={setEmail}
            type="text"
          />

          <div className={s.inputLabel}>Пароль</div>
          <Input
            label="Пароль"
            name="password"
            type="password"
            placeholder="Введите пароль"
            // value={password}
            // setValue={setPassword}
          />
        </div>
        <div className={s.footer}>
          <span>Запросить доступ</span>
          <button
            className={s.button}
            name="Войти"
            // onClick={() => dispatch(login(email, password))}
          >
            <span> Войти</span>
          </button>
        </div>
      </form>
    </div>
  );
}
