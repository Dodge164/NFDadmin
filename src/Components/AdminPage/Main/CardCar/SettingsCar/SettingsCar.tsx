import React from 'react';
import { useDispatch } from 'react-redux';
import { ColorInput } from './Checkbox/ColorInput';
import { addColor, addName } from '../../../../../redux/actions/carAction';
import { useTypedSelector } from '../../../../../hooks/typeSelectors';
import s from './settings.module.scss';

export default function SettingsCar() {
 
  const carReducer = useTypedSelector((state) => state.carReducer);

  const dispatch = useDispatch();

  const onAddColor = (color: string) => {
    console.log('color', color);
   dispatch(addColor(color))
  }
  const onAddName = (name: string) => {
    console.log('name', name);
   dispatch(addName(name))
  }


  return (
    <div className={s.carSettings}>
      <div className={s.container}>
        <div className={s.title}>Настройки автомобиля</div>
        <div className={s.row}>
          <div className={s.input}>
            <div className={s.label}>Модель автомобиля</div>
            <input
              type="text"
              name="carModel"
              value={carReducer.name}
              onChange={(event) => onAddName(event.target.value)}
              placeholder="Введите модель автомобиля"
            />
          </div>
          <div className={s.input}>
            <div className={s.label}>Тип автомобиля</div>
            <input
              className={s.inputError}
              type="text"
              name="carType"
             
              placeholder="Введите тип автомобиля"
              
            />
            <div className={s.error}>Пример ошибки</div>
          </div>
          <ColorInput addColor={onAddColor} />
          
          {carReducer.colors?.map((color, index) => {
           
 return <label><input type="checkbox" key={index} value={color} /><span>{color}</span>
          </label>
          })}
        </div>
        
      </div>
    </div>
  );
}
