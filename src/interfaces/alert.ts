import { TypesAlert } from '../redux/types/statusTypes';
import { AlertActionType } from '../redux/types/alertTypes';

export interface IInitAlert {
  message: string;
  isShow: boolean;
  type: TypesAlert;
}

interface SetAlert {
  type: AlertActionType.SET_ALERT;
  payload: IInitAlert;
}
interface SetAlertClose {
  type: AlertActionType.SET_ALERT_CLOSE;
}

export type AlertAction = SetAlert | SetAlertClose;
