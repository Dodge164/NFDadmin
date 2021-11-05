/* eslint-disable import/no-anonymous-default-export */
import * as tableOrderActionCreators from './tableOrderAction';
import * as carListActionCreators from './carListAction';
import * as categoriesActionCreators from './categoryAction';
import * as statusesActionCreators from './statusAction';
import * as citiesActionCreators from './cityAction';

export default {
  ...carListActionCreators,
  ...categoriesActionCreators,
  ...tableOrderActionCreators,
  ...statusesActionCreators,
  ...citiesActionCreators,
};
