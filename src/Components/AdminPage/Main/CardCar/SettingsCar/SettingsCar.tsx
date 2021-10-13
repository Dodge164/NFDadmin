import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { fetchCategory } from '../../../../../redux/actions/categoryAction';
import s from './settings.module.scss';
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

const initialValues: ICarState = {
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
};

const handlerSubmit = async (values: ICarState) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  alert(JSON.stringify(values, null, 2));
};

export const SettingsCar: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  return (
    <div className={s.carSettings}>
      <div className={s.container}>
        <div className={s.title}>Настройки автомобиля</div>
        <Formik
          initialValues={initialValues}
          onSubmit={handlerSubmit}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .min(3, 'Введите не менее трех символов')
              .max(40, 'Доступная длина 40 символов')
              .required('Поле не заполнено!'),
            priceMin: Yup.number()
              .required('Поле не заполнено!')
              .min(0, 'Введите стоимость')
              .integer('Введите целое число')
              .positive('Стоимость должна быть больше нуля'),
            priceMax: Yup.number()
              .required('Поле не заполнено!')
              .min(1, 'Введите стоимость')
              .integer('Введите целое число')
              .positive('Стоимость должна быть больше нуля'),
          })}
        >
          {({
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            // handleChange,
            // handleBlur,
            handleSubmit,
            handleReset,
          }) => (
            <>
              <div className={s.settingsWrapper}>
                <div className={s.row}>
                  <Form className={s.form} onSubmit={handleSubmit}>
                    <div className={s.input}>
                      <label className={s.label} htmlFor="name">
                        Модель автомобиля
                      </label>
                      <Field
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        placeholder="Модель автомобиля ..."
                        className={cn(s.field, {
                          [s.inputError]: errors.name && touched.name,
                        })}
                      />
                      {errors.name && touched.name && (
                        <div className={s.inputFeedback}>{errors.name}</div>
                      )}
                    </div>
                    {/* <Form>
                          <label>
                            <Field type="radio" name="picked" value="One" />
                              One
                          </label>
                          <label>
                          <Field type="radio" name="picked" value="Two" />
                              Two
                          </label>
                        </Form> */}
                    <div className={s.input}>
                      <label className={s.label} htmlFor="type">
                        Тип автомобиля
                      </label>
                      <Field
                        id="type"
                        name="type"
                        type="text"
                        placeholder="Тип автомобиля ..."
                      />
                    </div>
                    <div className={s.input}>
                      <label className={s.label} htmlFor="priceMin">
                        Минимальная цена
                      </label>
                      <Field
                        id="priceMin"
                        name="priceMin"
                        type="number"
                        value={values.priceMin}
                        placeholder="Минимальная цена ..."
                        className={cn(s.field, {
                          [s.inputError]: errors.priceMin && touched.priceMin,
                        })}
                      />
                      {errors.priceMin && touched.priceMin && (
                        <div className={s.inputFeedback}>{errors.priceMin}</div>
                      )}
                    </div>
                    <div className={s.input}>
                      <label className={s.label} htmlFor="priceMax">
                        Максимальная цена
                      </label>
                      <Field
                        id="priceMax"
                        name="priceMax"
                        type="number"
                        value={values.priceMax}
                        placeholder="Максимальная цена ..."
                        className={cn(s.field, {
                          [s.inputError]: errors.priceMax && touched.priceMax,
                        })}
                      />
                      {errors.priceMax && touched.priceMax && (
                        <div className={s.inputFeedback}>{errors.priceMax}</div>
                      )}
                    </div>
                    <div className={s.input}>
                      <label className={s.label} htmlFor="colors">
                        Доступные цвета
                      </label>
                      <Field
                        id="colors"
                        name="colors"
                        placeholder="Доступные цвета ..."
                      />
                    </div>
                    <div className={s.input}>
                      <label className={s.label} htmlFor="description">
                        Описание
                      </label>
                      <Field
                        id="description"
                        name="description"
                        placeholder="Введите описание автомобиля ..."
                      />
                    </div>
                    <div className={s.buttons}>
                      <div className={s.buttonsCreate}>
                        <button
                          type="submit"
                          className={s.buttonSubmit}
                          disabled={isSubmitting}
                        >
                          <span>Сохранить</span>
                        </button>
                        <button
                          type="button"
                          className={s.buttonReset}
                          onClick={handleReset}
                          disabled={!dirty || isSubmitting}
                        >
                          <span>Отменить</span>
                        </button>
                      </div>
                      <div className={s.deleteBtn}>
                        <button
                          type="button"
                          className={s.buttonDelete}
                          // onClick={handleDelete}
                        >
                          <span>Удалить</span>
                        </button>
                      </div>    
                    </div>
                  </Form>
                </div>
              </div>
            </>
          )}
        </Formik>
      </div>
    </div>
  )
};
