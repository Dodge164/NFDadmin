/* eslint-disable import/no-anonymous-default-export */
import * as tableOrderActionCreators from './tableOrderAction';
import * as carListActionCreators from './carListAction';
import * as categoriesActionCreators from './categoryAction';

export default {
  ...carListActionCreators,
  ...categoriesActionCreators,
  ...tableOrderActionCreators,
};
