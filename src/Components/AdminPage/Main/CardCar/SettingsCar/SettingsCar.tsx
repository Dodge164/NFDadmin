/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import cn from 'classnames';
import { Field, FieldArray, Form, Formik } from 'formik';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { useActions } from '../../../../../hooks/useActions';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { ICar, IValue } from '../../../../../interfaces/carListInterfaces';
import { ICategoryId } from '../../../../../interfaces/categoriesInterfaces';
import { updateCard } from '../../../../../redux/actions/carCardAction';

import s from './settings.module.scss';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Введите не менее трех символов')
    .max(40, 'Доступная длина 40 символов')
    .required('Поле не заполнено!'),
  categoryId: Yup.object().shape({
    id: Yup.string().required('Выберите тип автомобиля'),
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

const handleCustomSubmit = async (values: ICar) => {
  console.log('handlerSubmit :>> ', values);
};

export const SettingsCar: FC = () => {
  const dispatch = useDispatch();

  const car = useTypedSelector((state) => state.carReducer);
  const { categories } = useTypedSelector((state) => state.categoriesReducer);
  const { fetchCategories, fetchUpdateCard, fetchNewCard, fetchDeleteCard } =
    useActions();
  const [colorInput, setColorInput] = useState('');

  const handleUpdateStore = (val: IValue): void => {
    dispatch(updateCard(val));
  };

  const handleInputColor = (push: any, colors: string[]): void => {
    push(colorInput);
    const updatedColor = [...colors];
    updatedColor.push(colorInput);
    handleUpdateStore({ key: 'colors', value: updatedColor });
    setColorInput('');
  };

  const handlerSaveClick = async () => {
    if (car.id) {
      fetchUpdateCard(car.id, car);
    } else {
      fetchNewCard(car);
    }
  };
  const handleDeleteClick = async () => {
    if (car.id) {
      fetchDeleteCard(car.id);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className={s.settings}>
      <header className={s.header}>Настройки автомобиля</header>
      <Formik
        initialValues={car}
        onSubmit={handleCustomSubmit}
        validationSchema={validationSchema}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleSubmit,
          handleChange,
        }) => (
          <Form className={s.form} onSubmit={handleSubmit}>
            {console.log('values :>> ', values)}
            <div className={s.inputs}>
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
                  onChange={(event: any) => {
                    handleUpdateStore({
                      key: 'name',
                      value: event.target.value,
                    });
                    handleChange(event);
                  }}
                />
                {errors.name && touched.name && (
                  <div className={s.inputFeedback}>{errors.name}</div>
                )}
              </div>

              <div className={s.input}>
                <label className={s.label} htmlFor="categoryId">
                  Тип автомобиля
                </label>
                <Field
                  name="categoryId.id"
                  as="select"
                  className={cn(s.field, {
                    [s.inputError]: errors.categoryId && touched.categoryId,
                  })}
                  onChange={(event: any) => {
                    handleUpdateStore({
                      key: 'categoryId',
                      value: { id: event.target.value, name: '' },
                    });
                    handleChange(event);
                  }}
                >
                  <option value="">Выберите тип автомобиля ...</option>
                  {categories.map((category: ICategoryId) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
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
                  onChange={(event: any) => {
                    handleUpdateStore({
                      key: 'priceMin',
                      value: +event.target.value,
                    });
                    handleChange(event);
                  }}
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
                  onChange={(event: any) => {
                    handleUpdateStore({
                      key: 'priceMax',
                      value: +event.target.value,
                    });
                    handleChange(event);
                  }}
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
                            onClick={() => {
                              handleInputColor(push, values.colors);
                            }}
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
                        onChange={(event: any) => {
                          handleUpdateStore({
                            key: 'description',
                            value: event.target.value,
                          });
                          handleChange(event);
                        }}
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
                  onClick={handlerSaveClick}
                >
                  <span>Сохранить</span>
                </button>
                <button
                  type="button"
                  className={s.buttonReset}
                  onClick={() => {
                    setColorInput('');
                  }}
                >
                  <span>Отменить</span>
                </button>
              </div>
              {car?.id && (
                <div className={s.deleteBtn}>
                  <button
                    type="button"
                    className={s.buttonDelete}
                    onClick={handleDeleteClick}
                  >
                    <span>Удалить</span>
                  </button>
                </div>
              )}
            </footer>
          </Form>
        )}
      </Formik>
    </div>
  );
};
