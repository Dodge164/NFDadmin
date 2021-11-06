/* eslint-disable react-hooks/exhaustive-deps */
import { Select } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as Arrows } from '../../../../../../assets/doubleArrow.svg';
import { useActions } from '../../../../../../hooks/useActions';
import { useTypedSelector } from '../../../../../../hooks/useTypedSelector';
import { ICity } from '../../../../../../interfaces/city';
import { IStatus } from '../../../../../../interfaces/status';
import { setSelectedCity } from '../../../../../../redux/actions/cityAction';
import { setSelectedStatus } from '../../../../../../redux/actions/statusAction';
import {
  setPeriod,
  setSelectedPeriod,
} from '../../../../../../redux/actions/tableOrderAction';

import './antd.scss';
import s from './orderSelect.module.scss';

const { Option } = Select;

const OrderSelect: React.FC = () => {
  const dispatch = useDispatch();

  const { error, isLoading, selectedPeriod } = useTypedSelector(
    (state) => state.tableOrderReducer,
  );

  const { statusList, selectedStatus } = useTypedSelector(
    (state) => state.statusReducer,
  );

  const { cityList, selectedCity } = useTypedSelector(
    (state) => state.cityReducer,
  );

  const { fetchStatuses, fetchCities, fetchCategories } = useActions();

  function handleChangeStatus(status: string) {
    dispatch(setSelectedStatus(status !== 'Статус заказа' ? status : ''));
  }
  function handleChangeCity(city: string) {
    dispatch(setSelectedCity(city !== 'Все города' ? city : ''));
  }

  function handleChangePeriod(period: string) {
    let start = new Date();
    switch (period) {
      case 'За день':
        start.setHours(0, 0, 0, 0);
        break;
      case 'За неделю':
        start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
        start.setHours(0, 0, 0, 0);

        break;
      case 'За месяц':
        start = new Date(start.getFullYear(), start.getMonth(), 1);

        break;
      case 'За год':
        start = new Date(start.getFullYear(), 0, 1);

        break;
      default:
        start = new Date(0);
    }

    dispatch(setPeriod(Number(new Date(start))));
    dispatch(setSelectedPeriod(period));
  }

  useEffect(() => {
    fetchStatuses();
    fetchCities();
    fetchCategories();
  }, []);

  if (isLoading) {
    return <h2>Загрузка...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className={s.selectGroup}>
      <Select
        suffixIcon={<Arrows />}
        onChange={handleChangePeriod}
        defaultValue={selectedPeriod ? selectedPeriod : 'За все время'}
      >
        <Option value="За все время">За все время</Option>
        <Option value="За день">За день</Option>
        <Option value="За неделю">За неделю</Option>
        <Option value="За месяц">За месяц</Option>
        <Option value="За год">За год</Option>
      </Select>

      <Select
        suffixIcon={<Arrows />}
        onChange={handleChangeCity}
        defaultValue={selectedCity ? selectedCity : 'Все города'}
      >
        <Option value="Все города">Все города</Option>
        {cityList.map((city: ICity) => (
          <Option key={city.id} value={city.id}>
            {city?.name}
          </Option>
        ))}
      </Select>

      <Select
        suffixIcon={<Arrows />}
        onChange={handleChangeStatus}
        defaultValue={selectedStatus ? selectedStatus : 'Статус заказа'}
      >
        <Option value="Статус заказа">Статус заказа</Option>
        {statusList.map((status: IStatus) => (
          <Option key={status.id} value={status.id}>
            {status.name}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default OrderSelect;
