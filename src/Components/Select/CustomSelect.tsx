/* eslint-disable react-hooks/exhaustive-deps */
import { Select } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as Arrows } from '../../assets/doubleArrow.svg';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { setSelectedCategory } from '../../redux/actions/categoryAction';

import './antd.scss';
import s from './select.module.scss';

const { Option } = Select;

const CustomSelect: React.FC = () => {
  const dispatch = useDispatch();
  const { categories, error, isLoading, selected } = useTypedSelector(
    (state) => state.categoriesReducer,
  );

  const { fetchCategories } = useActions();

  // const handleChangePage = (currentPage: number) => {
  //   dispatch(setCarListPage(currentPage - 1));
  // };

  function handleChange(category: string) {
    dispatch(setSelectedCategory(category !== 'Все категории' ? category : ''));
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  if (isLoading) {
    return <h2>Идет загрузка...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className={s.select}>
      <Select
        suffixIcon={<Arrows />}
        onChange={handleChange}
        defaultValue={selected ? selected : 'Все категории'}
      >
        <Option value="Все категории">Все категории</Option>
        {categories.map((category: any) => (
          <Option key={category.id} value={category.id}>
            {category.name}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default CustomSelect;
