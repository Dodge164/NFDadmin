import { AlertAction, IInitAlert } from '../../interfaces/alert';
import { AlertActionType } from '../types/alertTypes';
import { TypesAlert } from '../types/statusTypes';

const initialState: IInitAlert = {
  isShow: false,
  message: '',
  type: TypesAlert.SUCCESS,
};

const alertReducer = (
  state = initialState,
  action: AlertAction,
): IInitAlert => {
  switch (action.type) {
    case AlertActionType.SET_ALERT: {
      return {
        isShow: true,
        message: action.payload.message,
        type: action.payload.type,
      };
    }
    case AlertActionType.SET_ALERT_CLOSE: {
      return {
        ...state,
        isShow: false,
      };
    }
    default:
      return state;
  }
};

export default alertReducer;
