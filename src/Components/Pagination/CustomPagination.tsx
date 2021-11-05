import { Pagination } from 'antd';

import './antd.scss';

import s from './pagination.module.scss';

interface IPaginationProps {
  currentPage: number;
  limit: number;
  counter: number;
  onChangePage: (currentPage: number) => void;
}

export default function CustomPagination(props: IPaginationProps) {
  const { currentPage, limit, counter, onChangePage } = props;

  return (
    <Pagination
      current={currentPage + 1}
      defaultCurrent={currentPage + 1}
      total={counter}
      pageSize={limit}
      showSizeChanger={false}
      hideOnSinglePage={true}
      showLessItems
      onChange={onChangePage}
      itemRender={(_, type, originalContent) => {
        switch (type) {
          case 'prev':
            return <div className={s.numb}>&laquo;</div>;

          case 'next':
            return <div className={s.numb}>&raquo;</div>;

          case 'jump-prev':
            return <div className={s.dots}>...</div>;

          case 'jump-next':
            return <div className={s.dots}>...</div>;

          default:
            return originalContent;
        }
      }}
    />
  );
}
