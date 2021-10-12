import { Field, Form, Formik } from 'formik';
import { FC } from 'react';
import s from './formik.module.scss';

// interface NewCardProps {
//     addName(name: string): void;
// }

interface IThumbnail {
  path: string;
}

interface ICategoryId {
  description?: string;
  id: string;
  name?: string;
}
export interface ICarState {
  priceMax: number;
  priceMin: number;
  thumbnail: IThumbnail;
  description: string;
  categoryId: ICategoryId;
  colors: string[];
  name: string;
  number: string;
}

interface Values {
  priceMax: number;
  priceMin: number;
  thumbnail: IThumbnail;
  description: string;
  categoryId: ICategoryId;
  colors: string[];
  name: string;
  number: string;
}

export const CardOfCar: FC = () => (
  <div className={s.carSettings}>
    <div className={s.container}>
      <div className={s.title}>Настройки автомобиля</div>
      <Formik
        initialValues={{
          priceMax: 0,
          priceMin: 0,
          thumbnail: {
            path: '',
          },
          description: '',
          categoryId: {
            description: '',
            id: '',
            name: '',
          },
          name: '',
          colors: [],
          number: '',
        }}
        onSubmit={async (values: Values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <div className={s.row}>
          <Form>
            <div className={s.input}>
              <label className={s.label} htmlFor="name">
                Модель автомобиля
              </label>
              <Field
                id="name"
                name="name"
                placeholder="Модель автомобиля ..."
              />
            </div>
            <div className={s.input}>
              <label className={s.label} htmlFor="lastName">
                Тип автомобиля
              </label>
              <Field id="type" name="type" placeholder="Тип автомобиля ..." />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </div>
      </Formik>
    </div>
  </div>
);
