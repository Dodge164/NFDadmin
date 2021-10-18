import s from './carList.module.scss';

function CarList() {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.selectGroup}>
          <select className={s.select} name="filter_01" id="filter_01">
            <option value="filter_01">filter_01.1</option>
            <option value="filter_01">filter_01.2</option>
            <option value="filter_01">filter_01.3</option>
            <option value="filter_01">filter_01.4</option>
          </select>
          <select className={s.select} name="filter_01" id="filter_01">
            <option value="filter_02">filter_02.1</option>
            <option value="filter_02">filter_02.2</option>
            <option value="filter_02">filter_02.3</option>
            <option value="filter_02">filter_02.4</option>
          </select>
          <select className={s.select} name="filter_01" id="filter_01">
            <option value="filter_03">filter_03.1</option>
            <option value="filter_03">filter_03.2</option>
            <option value="filter_03">filter_03.3</option>
            <option value="filter_03">filter_03.4</option>
          </select>
          <select className={s.select} name="filter_01" id="filter_01">
            <option value="filter_04">filter_04.1</option>
            <option value="filter_04">filter_04.2</option>
            <option value="filter_04">filter_04.3</option>
            <option value="filter_04">filter_04.4</option>
          </select>
        </div>
        <div className={s.buttonGroup}>
          <button className={s.reset}>Reset</button>
          <button className={s.apply}>Apply</button>
        </div>
      </div>
      <div className={s.main}>
        <table>
          <thead>
            <tr>
              <th>Модель</th>
              <th>Фото</th>
              <th>Категория</th>
              <th>Город</th>
              <th>Точка выдачи</th>
              <th>Цена мин</th>
              <th>Цена макс</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={s.title}>Модель</td>
              <td className={s.col}>Фото</td>
              <td className={s.col}>Категория</td>
              <td className={s.col}>Город</td>
              <td className={s.col}>Точка выдачи</td>
              <td className={s.col}>Цена мин</td>
              <td className={s.col}>Цена макс</td>
            </tr>
            <tr>
              <td className={s.title}>Модель</td>
              <td className={s.col}>Фото</td>
              <td className={s.col}>Категория</td>
              <td className={s.col}>Город</td>
              <td className={s.col}>Точка выдачи</td>
              <td className={s.col}>Цена мин</td>
              <td className={s.col}>Цена макс</td>
            </tr>
            <tr>
              <td className={s.title}>Модель</td>
              <td className={s.col}>Фото</td>
              <td className={s.col}>Категория</td>
              <td className={s.col}>Город</td>
              <td className={s.col}>Точка выдачи</td>
              <td className={s.col}>Цена мин</td>
              <td className={s.col}>Цена макс</td>
            </tr>
            <tr>
              <td className={s.title}>Модель</td>
              <td className={s.col}>Фото</td>
              <td className={s.col}>Категория</td>
              <td className={s.col}>Город</td>
              <td className={s.col}>Точка выдачи</td>
              <td className={s.col}>Цена мин</td>
              <td className={s.col}>Цена макс</td>
            </tr>
            <tr>
              <td className={s.title}>Модель</td>
              <td className={s.col}>Фото</td>
              <td className={s.col}>Категория</td>
              <td className={s.col}>Город</td>
              <td className={s.col}>Точка выдачи</td>
              <td className={s.col}>Цена мин</td>
              <td className={s.col}>Цена макс</td>
            </tr>
            <tr>
              <td className={s.title}>Модель</td>
              <td className={s.col}>Фото</td>
              <td className={s.col}>Категория</td>
              <td className={s.col}>Город</td>
              <td className={s.col}>Точка выдачи</td>
              <td className={s.col}>Цена мин</td>
              <td className={s.col}>Цена макс</td>
            </tr>
            <tr>
              <td className={s.title}>Модель</td>
              <td className={s.col}>Фото</td>
              <td className={s.col}>Категория</td>
              <td className={s.col}>Город</td>
              <td className={s.col}>Точка выдачи</td>
              <td className={s.col}>Цена мин</td>
              <td className={s.col}>Цена макс</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={s.footer}>footer</div>
    </div>
  );
}

export default CarList;
