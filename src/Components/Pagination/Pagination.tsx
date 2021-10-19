import cn from 'classnames';

import s from './pagination.module.scss';

export default function Pagination() {
  return (
    <div className={s.pagination}>
      <ul>
        <li className={cn(s.btn, s.prev)}>
          <span>&laquo;</span>
        </li>
        <li className={cn(s.first, s.numb)}>
          <span>1</span>
        </li>
        <li className={s.dots}>
          <span>...</span>
        </li>
        <li className={s.numb}>
          <span>6</span>
        </li>
        <li className={cn(s.numb, s.active)}>
          <span>7</span>
        </li>
        <li className={s.numb}>
          <span>8</span>
        </li>
        <li className={s.dots}>
          <span>...</span>
        </li>
        <li className={cn(s.last, s.numb)}>
          <span>13</span>
        </li>
        <li className={cn(s.btn, s.next)}>
          <span>&raquo;</span>
        </li>
      </ul>
    </div>
  );
}
