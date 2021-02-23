export enum LoginActionTypes {
  LOGIN = "Login",
  LOGIN_REQUEST = "Login - request",
  LOGIN_SUCCESS = "Login - success",
  LOGIN_ERROR = "Login - error",
}

export const LoginActions = {
  login: (username: string, password: string) => ({
    payload: { username, password },
    type: LoginActionTypes.LOGIN,
  }),
  loginRequest: () => ({
    type: LoginActionTypes.LOGIN_REQUEST,
  }),
  loginSuccess: (result: boolean) => ({
    payload: { result },
    type: LoginActionTypes.LOGIN_SUCCESS,
  }),
  loginError: (error: Error) => ({
    payload: { error },
    type: LoginActionTypes.LOGIN_ERROR,
  }),
};
