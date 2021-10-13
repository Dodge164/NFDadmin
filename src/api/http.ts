import axios from 'axios';
import { ICategoryId } from '../redux/reducers/carReducer';
import { CategoryTypes } from '../redux/types/categoryTypes';

// const queryString = require('query-string');

const API_KEY: string = process.env.REACT_APP_DB_API_KEY ? process.env.REACT_APP_DB_API_KEY : '';
export const url = process.env.REACT_APP_NFDDB_URL;

interface IData { data : Array<ICategoryId>
}

const fetchRequest = async (way: string) => {
  const res = await axios.get(`${url}${way}`, {
    headers: {
      'X-Api-Factory-Application-Id': API_KEY,
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'text-html',
    },
  });
  return res.data;
};

export const getCarCategory = async () => {
  const res: IData = await fetchRequest('/db/category');
  return res.data;
};

// export const getCityList = async () => {
//   const res = await fetchRequest('/db/city');
//   return res.data;
// };

// export const getPointListByCityId = async (cityId) => {
//   const res = await fetchRequest(`/db/point?cityId=${cityId}`);
//   return res.data;
// };

// export const getCarList = async () => {
//   const res = await fetchRequest('/db/car');
//   return res.data;
// };


// export const getCarListByCategory = async (catId) => {
//   const res = await fetchRequest(`/db/car?categoryId=${catId}`);
//   return res.data;
// };

// export const getRateType = async () => {
//   const res = await fetchRequest('/db/rateType');
//   return res.data;
// };

// export const getRate = async () => {
//   const res = await fetchRequest('/db/rate');
//   return res.data;
// };

export default fetchRequest;
