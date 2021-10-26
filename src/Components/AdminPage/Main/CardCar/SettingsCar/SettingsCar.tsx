/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import cn from 'classnames';
import { Field, FieldArray, Form, Formik } from 'formik';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { ICar } from '../../../../../interfaces/interfaces';
import { fetchCategory } from '../../../../../redux/actions/categoryAction';

import s from './settings.module.scss';

const initialValues: ICar = {
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

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Введите не менее трех символов')
    .max(40, 'Доступная длина 40 символов')
    .required('Поле не заполнено!'),
  categoryId: Yup.object().shape({
    name: Yup.string()

      // .test(
      //   'categoryId.name',
      //   'Выберите тип автомобиля',
      //   function (value: string | undefined) {
      //     if (value !== undefined && value === 'Выберите тип автомобиля ...') {
      //       return false;
      //     }
      //     return true;
      //   },
      // )

      .required('Выберите тип автомобиля'),
  }),
  priceMin: Yup.number()
    .required('Поле не заполнено!')
    .min(0, 'Введите стоимость')
    .integer('Некорректная стоимость')
    .positive('Некорректная стоимость'),
  priceMax: Yup.number()
    .required('Поле не заполнено!')
    .min(1, 'Введите стоимость')
    .integer('Некорректная стоимость')
    .positive('Некорректная стоимость'),
  colors: Yup.array().min(1, 'Укажите цвет').required('Поле не заполнено!'),
  description: Yup.string()
    .min(3, 'Введите не менее трех символов')
    .max(80, 'Доступная длина 80 символов')
    .required('Поле не заполнено!'),
});

const handlerSubmit = async (values: ICar) => {
  console.log('handlerSubmit :>> ', values);
};

export const SettingsCar: FC = () => {
  const [colorInput, setColorInput] = useState('');

  const handlerInputColor = (push: any): void => {
    push(colorInput);
    setColorInput('');
  };

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchCategory());
  }, [dispatch]);

  console.log('colorInput :>> ', colorInput);
  return (
    <div className={s.settings}>
      <header className={s.header}>Настройки автомобиля</header>
      <Formik
        initialValues={initialValues}
        onSubmit={handlerSubmit}
        validationSchema={validationSchema}
      >
        {({ values, touched, errors, isSubmitting, handleSubmit }) => (
          <Form className={s.form} onSubmit={handleSubmit}>
            <div className={s.inputs}>
              {console.log('values :>> ', values)}
              {console.log('errors :>> ', errors)}
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
              {/* <select name="categoryID">
                <option value={values.categoryId}>{categoryID}</option>
              </select> */}
              <div className={s.input}>
                <label className={s.label} htmlFor="categoryId">
                  Тип автомобиля
                </label>
                <Field
                  name="categoryId.name"
                  as="select"
                  className={cn(s.field, {
                    [s.inputError]: errors.categoryId && touched.categoryId,
                  })}
                  // placeholder="Выберите тип автомобиля ..."
                >
                  <option value="">Выберите тип автомобиля ...</option>
                  <option value="Эконом">Эконом</option>
                  <option value="Комфорт">Комфорт</option>
                  <option value="Люкс">Люкс</option>
                  <option value="Спорт">Спорт</option>
                  <option value="Внедорожник">Внедорожник</option>
                </Field>
                {errors.categoryId?.name && touched.categoryId?.name && (
                  <div className={s.inputFeedback}>{errors.categoryId}</div>
                )}
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
              <div className={s.colorsForm}>
                <div className={s.inputColors}>
                  <label className={s.label} htmlFor="colors">
                    Доступные цвета
                  </label>
                  <FieldArray name="colors">
                    {({ remove, push }) => (
                      <>
                        <div className={s.colorsFormField}>
                          <div className={s.colorField}>
                            <Field
                              name="colors"
                              placeholder="Выберите цвет ..."
                              type="text"
                              value={colorInput}
                              onChange={(event: any) =>
                                setColorInput(event.target.value)
                              }
                              className={cn(s.field, {
                                [s.inputError]: errors.colors && touched.colors,
                              })}
                            />
                            {errors.colors && touched.colors && (
                              <div className={s.inputFeedback}>
                                {errors.colors}
                              </div>
                            )}
                          </div>
                          <button
                            type="button"
                            disabled={!colorInput}
                            className={s.addColorBtn}
                            onClick={() => handlerInputColor(push)}
                          >
                            <div>
                              <span>+</span>
                            </div>
                          </button>
                        </div>
                        <div className={s.checkboxes}>
                          {values.colors.length > 0 &&
                            values.colors.map((color, index) => (
                              <div className={s.checkbox} key={index}>
                                <label
                                  className={s.checkboxLabel}
                                  htmlFor={`colors.${index}`}
                                >
                                  {color}
                                </label>
                                <Field
                                  onChange={() => remove(index)}
                                  name={`colors.${index}`}
                                  type="checkbox"
                                />
                              </div>
                            ))}
                        </div>
                      </>
                    )}
                  </FieldArray>
                </div>
              </div>
              <div className={s.input}>
                <label className={s.label} htmlFor="description">
                  Описание
                </label>
                <Field name="description">
                  {({ field }: any) => (
                    <>
                      <textarea
                        {...field}
                        value={values.description}
                        placeholder="Введите описание автомобиля ..."
                        className={cn(s.fieldDescription, {
                          [s.inputError]:
                            errors.description && touched.description,
                        })}
                      />
                      {errors.description && touched.description && (
                        <div className={s.inputFeedback}>
                          {errors.description}
                        </div>
                      )}
                    </>
                  )}
                </Field>
              </div>
            </div>
            <footer className={s.footer}>
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
                  onClick={() => {
                    console.log('dd');
                    setColorInput('');
                    // handleReset();
                  }}
                  // disabled={!dirty || isSubmitting}
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
            </footer>
          </Form>
        )}
      </Formik>
    </div>
  );
};
