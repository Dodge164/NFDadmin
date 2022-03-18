/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios from 'axios';

import { IOrders, IOrderStatusId } from '../interfaces/selectInterfaces';
import { ICar, ICars } from '../interfaces/carListInterfaces';
import { ICategories } from '../interfaces/categoriesInterfaces';
import { IStatuses } from '../interfaces/status';
import { TypesAlert } from '../redux/types/statusTypes';
import { setAlert } from '../redux/actions/alertAction';

const API_KEY: string = process.env.REACT_APP_DB_API_KEY
  ? process.env.REACT_APP_DB_API_KEY
  : '';
export const url: string = process.env.REACT_APP_NFDDB_URL!;

const fetchRequest = async (way: string) => {
  const accessToken = window.localStorage.getItem('access_token');
  const res = await axios.get(`${url}${way}`, {
    headers: {
      'X-Api-Factory-Application-Id': API_KEY,
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'text-html',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.data;
};

export const getCarCategory = async () => {
  const res: ICategories = await fetchRequest('/db/category');
  return res;
};

export const getCityList = async () => {
  const res = await fetchRequest('/db/city');
  return res;
};

export const getCarList = async (currentPage: number, limit: number) => {
  const res: ICars = await fetchRequest(
    `/db/car?page=${currentPage}&limit=${limit}`,
  );
  return res;
};

export const getCarListByCategory = async (
  currentPage: number,
  limit: number,
  categoryId: string,
) => {
  const res: ICars = await fetchRequest(
    `/db/car?page=${currentPage}&limit=${limit}&categoryId=${categoryId}`,
  );
  return res;
};

export const getStatus = async () => {
  const res: IStatuses = await fetchRequest('/db/orderStatus');
  return res;
};

export const getOrders = async (currentPage: number, limit: number) => {
  const res: IOrders = await fetchRequest(
    `/db/order?page=${currentPage}&limit=${limit}`,
  );
  return res;
};
export const getOrdersByParams = async (
  currentPage: number,
  limit: number,
  selectedCity: string,
  selectedStatus: string,
  createdAt?: number,
) => {
  const cityId = selectedCity ? `&cityId=${selectedCity}` : '';
  const statusId = selectedStatus ? `&orderStatusId=${selectedStatus}` : '';
  const period = createdAt ? `&createdAt[$gt]=${createdAt}` : '';

  const res: IOrders = await fetchRequest(
    `/db/order?page=${currentPage}&limit=${limit}${statusId}${cityId}${period}`,
  );
  return res;
};

export interface IData {
  id: string;
  orderStatusId: IOrderStatusId;
}
const fetchPutRequest = async (way: string, data: IData | ICar) => {
  const accessToken = window.localStorage.getItem('access_token');
  try {
    const res = await axios.put(`${url}${way}`, data, {
      headers: {
        'X-Api-Factory-Application-Id': API_KEY,
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res;
  } catch (error: any) {
    setAlert({
      message: 'Ошибка сервера',
      isShow: true,
      type: TypesAlert.ERROR,
    });
    return error.response;
  }
};
const fetchPostRequest = async (way: string, data: IData | ICar) => {
  const accessToken = window.localStorage.getItem('access_token');
  try {
    const res = await axios.post(`${url}${way}`, data, {
      headers: {
        'X-Api-Factory-Application-Id': API_KEY,
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res;
  } catch (error: any) {
    setAlert({
      message: 'Ошибка сервера',
      isShow: true,
      type: TypesAlert.ERROR,
    });
    return error.response;
  }
};
const fetchDeleteRequest = async (way: string) => {
  const accessToken = window.localStorage.getItem('access_token');
  try {
    const res = await axios.delete(`${url}${way}`, {
      headers: {
        'X-Api-Factory-Application-Id': API_KEY,
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res;
  } catch (error: any) {
    setAlert({
      message: 'Ошибка сервера',
      isShow: true,
      type: TypesAlert.ERROR,
    });
    return error.response;
  }
};

export const putOrderStatusById = async (orderId: string, data: IData) => {
  const res = await fetchPutRequest(`/db/order/${orderId}`, data);
  return res;
};

export const putCarById = async (carId: string, car: ICar) => {
  const res = await fetchPutRequest(`/db/car/${carId}`, car);
  return res;
};
export const postNewCar = async (car: ICar) => {
  const res = await fetchPostRequest('/db/car/', car);
  return res;
};
export const deleteCarById = async (carId: string) => {
  const res = await fetchDeleteRequest(`/db/car/${carId}`);
  return res;
};

export default fetchRequest;
