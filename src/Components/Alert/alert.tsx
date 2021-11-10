/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect } from 'react';
import cn from 'classnames';

import { ReactComponent as Ready } from '../../assets/ready.svg';
import { ReactComponent as Error } from '../../assets/error.svg';
import { ReactComponent as Cancel } from '../../assets/cancel.svg';
import { TypesAlert } from '../../redux/types/statusTypes';

import s from './alert.module.scss';

interface Props {
  children: string;
  type: TypesAlert;
  onClose: () => void;
}

export default function Alert(props: Props) {
  const { type, onClose } = props;

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     onClose();
  //   }, 3000);
  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <div
      className={cn(s.alert, {
        [s.success]: type === 'success',
        [s.error]: type === 'error',
      })}
    >
      <div className={s.label}>
        <div className={s.svg}>
          {props.type === 'success' ? <Ready /> : <Error />}
        </div>
        <div className={s.text}>{props.children}</div>
      </div>

      <div className={s.close} onClick={onClose}>
        <Cancel />
      </div>
    </div>
  );
}
