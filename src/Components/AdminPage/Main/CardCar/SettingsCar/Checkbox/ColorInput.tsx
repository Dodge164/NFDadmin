import React, { ChangeEvent, FC, useState } from 'react'

import s from './color.module.scss';


interface NewColorInputProps {
  addColor(color:string): void;
}

export const ColorInput: FC<NewColorInputProps> = ({addColor}) => {
   const [input, setInput] = useState('');

   const updateColor = (event:ChangeEvent<HTMLInputElement>) => {
setInput(event.target.value)
   }

const onAddColorClick = () => {
  addColor(input)
  setInput('')
}

  
  
    return (

        <div className={s.input}>
        <div className={s.label} >Доступные цвета</div>
        <div className={s.availableColor}>
          <input
          id='title'
            className={s.carColor}
            type="text"
            name="carColor"
            placeholder="Введите цвет автомобиля"
            value={input}
            onChange={updateColor}
          />
          <button type="button" onClick={onAddColorClick} className={s.carColorButton}>
            <div>
              <span>+</span>
            </div>
          </button>
        </div>
      </div>
      
     
    
    )
}
