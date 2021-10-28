/* eslint-disable no-console */
import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
  fetchCarList,
  setCarListPage,
} from '../../redux/actions/carListAction';

import s from './pagination.module.scss';

export default function Pagination2() {
  const { currentPage, limit, carsCount } = useTypedSelector(
    (state) => state.carListReducer,
  );

  const pagesCount = Math.ceil(carsCount / limit);
  const current = currentPage;
  const first = pagesCount - pagesCount;
  const last = pagesCount;
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCarList(currentPage, limit);
  }, [currentPage, limit]);

  return (
    <div className={s.pagination}>
      <ul>
        {current > 0 ? (
          <li
            className={s.btn}
            onClick={() => dispatch(setCarListPage(current - 1))}
          >
            <span>&laquo;</span>
          </li>
        ) : (
          <li className={s.btn}>
            <span className={s.disabled}>&laquo;</span>
          </li>
        )}

        <li
          className={cn(s.numb, s.first, {
            [s.activee]: current === 0,
          })}
          onClick={() => dispatch(setCarListPage(first))}
        >
          <span>{first}</span>
        </li>

        {current >= 3 && (
          <li className={s.dots}>
            <span>...</span>
          </li>
        )}

        <>
          <li
            className={cn(s.numb, {
              [s.active]: current < 3,
            })}
            onClick={() =>
              dispatch(
                setCarListPage(
                  current < pagesCount - 3 ? current - 1 : pagesCount - 4,
                ),
              )
            }
          >
            <span>
              {current < pagesCount - 3 ? current + 1 : pagesCount - 3}
            </span>
          </li>

          <li
            className={cn(s.numb, {
              [s.active]: current > 3 && pagesCount - 3,
            })}
            onClick={() =>
              dispatch(
                setCarListPage(
                  current < pagesCount - 3 ? current + 2 : pagesCount - 2,
                ),
              )
            }
          >
            <span>
              {current < pagesCount - 3 ? current + 2 : pagesCount - 1}
            </span>
          </li>

          <li
            className={s.numb}
            onClick={() =>
              dispatch(
                setCarListPage(
                  current < pagesCount - 3 ? current + 1 : pagesCount - 1,
                ),
              )
            }
          >
            <span>{current < pagesCount - 3 ? current + 3 : pagesCount}</span>
          </li>
        </>

        {current <= pagesCount - 3 && (
          <li className={s.dots}>
            <span>...</span>
          </li>
        )}

        <li
          className={cn(s.last, s.numb)}
          onClick={() => dispatch(setCarListPage(pagesCount))}
        >
          <span>{last}</span>
        </li>

        {current <= pagesCount ? (
          <li
            className={s.btn}
            onClick={() => dispatch(setCarListPage(current + 1))}
          >
            <span>&raquo;</span>
          </li>
        ) : (
          <li className={s.btn}>
            <span className={s.disabled}>&raquo;</span>
          </li>
        )}
      </ul>
    </div>
  );
}
