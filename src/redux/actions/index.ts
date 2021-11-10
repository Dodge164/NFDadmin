/* eslint-disable import/no-anonymous-default-export */
import * as orderActionCreators from './ordersAction';
import * as carListActionCreators from './carListAction';
import * as categoriesActionCreators from './categoryAction';
import * as statusesActionCreators from './statusAction';
import * as citiesActionCreators from './cityAction';
import * as alertActionCreators from './alertAction';

export default {
  ...carListActionCreators,
  ...categoriesActionCreators,
  ...orderActionCreators,
  ...statusesActionCreators,
  ...citiesActionCreators,
  ...alertActionCreators,
};
