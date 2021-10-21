import s from './select.module.scss';

const Select = () => {
  return (
    <div className={s.selectGroup}>
      <select className={s.select} name="period" id="period">
        <option value="period">За час</option>
        <option value="period">За сутки</option>
        <option value="period">За неделю</option>
        <option value="period">За месяц</option>
      </select>
      <select className={s.select} name="model" id="model">
        <option value="model">Model.1</option>
        <option value="model">Model.2</option>
        <option value="model">Model.3</option>
        <option value="model">Model.4</option>
      </select>
      <select className={s.select} name="city" id="city">
        <option value="city">City.1</option>
        <option value="city">City.2</option>
        <option value="city">City.3</option>
        <option value="city">City.4</option>
      </select>
      <select className={s.select} name="status" id="status">
        <option value="status">Status.1</option>
        <option value="status">Status.2</option>
        <option value="status">Status.3</option>
        <option value="status">Status.4</option>
      </select>
    </div>
  );
};

export default Select;
