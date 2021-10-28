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

export default function Pagination() {
  const { currentPage, limit, carsCount } = useTypedSelector(
    (state) => state.carListReducer,
  );

  // const currentPage2 = useTypedSelector(
  //   (state) => state.carListReducer.currentPage,
  // );

  const pagesCount = Math.ceil(carsCount / limit);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchCarList(currentPage, limit);
  }, [currentPage, limit]);

  return (
    // <div className="pages">
    //   {pages.map((page, index) => (
    //     <span
    //       key={index}
    //       // className={currentPage1 == page ? 'current-page' : 'page'}
    //       className={s.pagination}
    //       onClick={() => dispatch(setCarListPage(currentPage))}
    //     >
    //       {page}
    //     </span>
    //   ))}

    // </div>
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

        {currentPage > 3 ? (
          <li className={cn(s.first, s.numb)}>
            <span>1</span>
          </li>
        ) : (
          <li
            className={cn(s.numb, s.active)}
            onClick={() => dispatch(setCarListPage(currentPage))}
          >
            <span>{currentPage + 1}</span>
          </li>
        )}

        {currentPage > 3 ? (
          <li className={s.dots}>
            <span>...</span>
          </li>
        ) : (
          <li
            className={s.numb}
            onClick={() => dispatch(setCarListPage(currentPage + 1))}
          >
            <span>{currentPage + 2}</span>
          </li>
        )}

        {currentPage > 3 ? (
          <li
            className={s.numb}
            onClick={() => dispatch(setCarListPage(currentPage - 1))}
          >
            <span>{currentPage}</span>
          </li>
        ) : (
          <li
            className={s.numb}
            onClick={() => dispatch(setCarListPage(currentPage + 2))}
          >
            <span>{currentPage + 3}</span>
          </li>
        )}

        {currentPage > 3 ? (
          <li
            className={cn(s.numb, s.active)}
            onClick={() => dispatch(setCarListPage(currentPage))}
          >
            <span>{currentPage + 1}</span>
          </li>
        ) : (
          <li
            className={s.numb}
            onClick={() => dispatch(setCarListPage(currentPage + 3))}
          >
            <span>{currentPage + 4}</span>
          </li>
        )}

        {currentPage > 3 ? (
          <li
            className={s.numb}
            onClick={() => dispatch(setCarListPage(currentPage + 1))}
          >
            <span>{currentPage + 2}</span>
          </li>
        ) : (
          <li
            className={s.numb}
            onClick={() => dispatch(setCarListPage(currentPage + 4))}
          >
            <span>{currentPage + 5}</span>
          </li>
        )}

        <li className={s.dots}>
          <span>...</span>
        </li>

        <li className={cn(s.last, s.numb)}>
          <span>{pagesCount}</span>
        </li>

        {currentPage < pagesCount - 1 ? (
          <li
            className={s.btn}
            onClick={() => dispatch(setCarListPage(currentPage + 1))}
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
