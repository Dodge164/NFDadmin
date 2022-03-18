import cn from 'classnames';

import s from './checkbox.module.scss';

interface Props {
  checked: boolean;
  label: string;
}

export default function Checkbox(props: Props) {
  return (
    <>
      <label
        className={cn(s.checkbox, { [s.checked]: props.checked === true })}
      >
        {props.label}
        <input
          readOnly
          type="checkbox"
          checked={props.checked}
          className={s.checkBtn}
        />
        <div className={s.customCheckbox} />
      </label>
    </>
  );
}
