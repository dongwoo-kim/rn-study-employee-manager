// @flow
import type { Action, EmptyAction, ActionType } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export type EmployeeUpdate = {
  prop: string,
  value: string
};

export const employeeUpdate = (
  payload: EmployeeUpdate
): Action<EmployeeUpdate> => ({
  type: 'EMPLOYEE_UPDATE',
  payload
});

type Dispatch = (Action<*> | EmptyAction) => void;

export const employeeCreate = ({ name, phone, shift }: any) => {
  const { currentUser } = firebase.auth();

  return (dispatch: Dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: 'EMPLOYEE_CREATE' });
        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch: Dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: 'EMPLOYEES_FETCH_SUCCESS', payload: snapshot.val() });
      });
  };
};
