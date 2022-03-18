import { IInitStatusState, StatusesAction } from '../../interfaces/status';
import { StatusActionTypes } from '../types/statusTypes';

const initialState: IInitStatusState = {
  statusList: [],
  isLoading: false,
  error: null,
  selectedStatus: '',
};

const statusReducer = (
  state = initialState,
  action: StatusesAction,
): IInitStatusState => {
  switch (action.type) {
    case StatusActionTypes.FETCH_STATUS: {
      return { ...state, isLoading: true };
    }
    case StatusActionTypes.FETCH_STATUS_SUCCESS: {
      return {
        ...state,
        statusList: action.payload.data,
      };
    }
    case StatusActionTypes.FETCH_STATUS_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case StatusActionTypes.SELECT_STATUS: {
      return { ...state, selectedStatus: action.payload };
    }
    default:
      return state;
  }
};

export default statusReducer;
