//@flow
import type { Action, ActionType } from '../actions/types';

const INITIAL_STATE = {};

export default (state: any = INITIAL_STATE, action: Action<*>) => {
  const type: ActionType = action.type;

  switch (type) {
    case 'EMPLOYEES_FETCH_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};
