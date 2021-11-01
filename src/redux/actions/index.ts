/* eslint-disable import/no-anonymous-default-export */
import * as carListActionCreators from './carListAction';
import * as categoriesActionCreators from './categoryAction';

export default {
  ...carListActionCreators,
  ...categoriesActionCreators,
};
