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

  const dispatch = useDispatch();

  useEffect(() => {
    fetchCarList(currentPage, limit);
  }, [currentPage, limit]);

  return (
    <div className={s.pagination}>
      <ul>
        {currentPage >= 1 ? (
          <li
            className={s.btn}
            onClick={() => dispatch(setCarListPage(currentPage - 1))}
          >
            <span>&laquo;</span>
          </li>
        ) : (
          <li className={s.btn}>
            <span className={s.disabled}>&laquo;</span>
          </li>
        )}
        {currentPage >= 1 && (
          <li
            className={cn(s.numb, s.first, {
              [s.active]: currentPage === 0,
            })}
            onClick={() => dispatch(setCarListPage(0))}
          >
            <span>1</span>
          </li>
        )}

        {currentPage >= 2 && (
          <li className={s.dots}>
            <span>...</span>
          </li>
        )}

        <>
          <li
            className={cn(s.numb, {
              [s.active]: currentPage < 2,
            })}
            onClick={() =>
              dispatch(
                setCarListPage(
                  currentPage < pagesCount - 2 ? currentPage : pagesCount - 3,
                ),
              )
            }
          >
            <span>
              {currentPage < pagesCount - 2 ? currentPage + 1 : pagesCount - 2}
            </span>
          </li>

          <li
            className={cn(s.numb, {
              [s.active]: currentPage > 2 && pagesCount - 3,
            })}
            onClick={() =>
              dispatch(
                setCarListPage(
                  currentPage < pagesCount - 2
                    ? currentPage + 1
                    : pagesCount - 2,
                ),
              )
            }
          >
            <span>
              {currentPage < pagesCount - 2 ? currentPage + 2 : pagesCount - 1}
            </span>
          </li>

          <li
            className={s.numb}
            onClick={() =>
              dispatch(
                setCarListPage(
                  currentPage < pagesCount - 2
                    ? currentPage + 2
                    : pagesCount - 1,
                ),
              )
            }
          >
            <span>
              {currentPage < pagesCount - 2 ? currentPage + 3 : pagesCount}
            </span>
          </li>
        </>

        {currentPage < pagesCount - 4 && (
          <li className={s.dots}>
            <span>...</span>
          </li>
        )}
        {currentPage < pagesCount - 3 && (
          <li
            className={cn(s.last, s.numb)}
            onClick={() => dispatch(setCarListPage(pagesCount - 1))}
          >
            <span>{pagesCount}</span>
          </li>
        )}
        {currentPage == pagesCount - 1 ? (
          <li className={s.btn}>
            <span className={s.disabled}>&raquo;</span>
          </li>
        ) : (
          <li
            className={s.btn}
            onClick={() => dispatch(setCarListPage(currentPage + 1))}
          >
            <span>&raquo;</span>
          </li>
        )}
      </ul>
    </div>
  );
}
