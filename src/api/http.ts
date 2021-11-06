/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios from 'axios';

import { IOrders } from '../interfaces/selectInterfaces';
import { ICars } from '../interfaces/carListInterfaces';
import { ICategories } from '../interfaces/categoriesInterfaces';
import { IStatuses } from '../interfaces/status';

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
  console.log('resGet', res.data);
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

// export const getPointListByCityId = async (cityIdd) => {
//   const res = await fetchRequest(`/db/point?cityId=${cityIdd}`);
//   return res.data;
// };

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

export const getTableOrder = async (currentPage: number, limit: number) => {
  const res: IOrders = await fetchRequest(
    `/db/order?page=${currentPage}&limit=${limit}`,
  );
  return res;
};
export const getTableOrderByParams = async (
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

const fetchPutRequest = async (way: string, data: any) => {
  const accessToken = window.localStorage.getItem('access_token');
  const res = await axios.put(`${url}${way}`, data, {
    headers: {
      'X-Api-Factory-Application-Id': API_KEY,
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'text-html',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log('resPut', res);
  return res.data;
};

export const putOrderStatusById = async (orderId: string, data: any) => {
  const res = await fetchPutRequest(`/db/order/${orderId}`, data);
  console.log('res', res);
  return res;
};
// axios({
//   method: 'PUT',
//   url: `https://api-factory.simbirsoft1.com/api/db/order/${orderInfo.orderId}`,

//   data: {
//     orderStatusId: {
//       id: statusId,
//     },
//   },
//   headers: {
//     'X-Api-Factory-Application-Id': process.env.REACT_APP_DB_API_KEY,
//     'Access-Control-Allow-Origin': '*',
//     'Content-type': 'application/json',
//   },
// })
//   .then((response) => {
//     setOrderInfo(OrderData);
//     setStep(0);
//     history.push('/order');
//   })
//   .catch((error) => {
//     alert('Ошибка подтверждения заказа', error);
//   });
// } else {
// setStep((prev) => prev + 1);
// }
// }

export default fetchRequest;
