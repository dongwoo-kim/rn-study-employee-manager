// @flow

export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED = 'password_changed';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_FAIL = 'login_user_fail';
export const LOGIN_USER = 'login_user';

export type ActionType =
  | 'EMAIL_CHANGED'
  | 'PASSWORD_CHANGED'
  | 'LOGIN_USER_SUCCESS'
  | 'LOGIN_USER_FAIL'
  | 'LOGIN_USER'
  | 'EMPLOYEE_UPDATE'
  | 'EMPLOYEE_CREATE'
  | 'EMPLOYEES_FETCH_SUCCESS';

export type Action<T> = {
  type: ActionType,
  payload: T
};

export type EmptyAction = {
  type: ActionType
};
