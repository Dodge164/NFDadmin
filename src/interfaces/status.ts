import { StatusActionTypes } from '../redux/types/statusTypes';

export interface IStatus {
  name: string;
  id: string;
}
export interface IStatuses {
  data: IStatus[];
}

export interface IInitStatusState {
  statusList: IStatus[];
  isLoading: boolean;
  error: null | string;
  selectedStatus: string;
}

// interface IStatusList {
//   name: string;
//   id: string;
// }

interface FetchStatusAction {
  type: StatusActionTypes.FETCH_STATUS;
}
interface SelectStatusAction {
  type: StatusActionTypes.SELECT_STATUS;
  payload: string;
}

interface FetchStatusActionSuccess {
  type: StatusActionTypes.FETCH_STATUS_SUCCESS;
  payload: { data: IStatus[] };
}
interface FetchStatusActionError {
  type: StatusActionTypes.FETCH_STATUS_ERROR;
  payload: string;
}

export type StatusesAction =
  | FetchStatusAction
  | SelectStatusAction
  | FetchStatusActionSuccess
  | FetchStatusActionError;
