import React from 'react';
import { Progress } from 'antd';

import './antd.scss';
import s from './progress.module.scss';

interface Props {
  progress: number;
}
export default function CustomProgress(props: Props) {
  return (
    <div className={s.progress}>
      <div className={s.progressInfo}>
        <div>Заполнено</div>
        <div>{props.progress}%</div>
      </div>

      <Progress percent={props.progress} showInfo={false} />
    </div>
  );
}
