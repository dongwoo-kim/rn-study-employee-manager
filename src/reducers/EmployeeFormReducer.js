// @flow
import type { ActionType, Action } from '../actions/types';
import type { EmployeeUpdate } from '../actions/EmployeeActions';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (
  state: typeof INITIAL_STATE = INITIAL_STATE,
  action: Action<EmployeeUpdate>
): typeof INITIAL_STATE => {
  switch (action.type) {
    case 'EMPLOYEE_UPDATE':
      return { ...state, [action.payload.prop]: action.payload.value };
    case 'EMPLOYEE_CREATE':
      return INITIAL_STATE;
    default:
      return state;
  }
};
