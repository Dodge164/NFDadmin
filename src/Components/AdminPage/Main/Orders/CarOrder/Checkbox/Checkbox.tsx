// import cn from 'classnames';

import s from './checkbox.module.scss';

const Checkbox = () => {
  return (
    <>
      <label className={s.checkbox}>
        <input type="checkbox" name="extra" className={s.checkBtn} />
        <div className={s.customCheckbox} />
        <span>Полный бак</span>
      </label>

      <label className={s.checkbox}>
        <input type="checkbox" name="extra" className={s.checkBtn} />
        <div className={s.customCheckbox} />
        <span>Детское кресло</span>
      </label>

      <label className={s.checkbox}>
        <input type="checkbox" name="extra" className={s.checkBtn} />
        <div className={s.customCheckbox} />
        <span>Правый руль</span>
      </label>
    </>
  );
};

export default Checkbox;
