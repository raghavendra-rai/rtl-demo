import { ILoginState } from "./ILoginState";
import { LoginActionTypes } from "./LoginActions";

export default function LoginReducer(
  state: ILoginState = { loading: false, error: "", isLoggedIn: false },
  action: any
) {
  switch (action.type) {
    case LoginActionTypes.LOGIN_REQUEST:
      return { ...state, loading: true };
    case LoginActionTypes.LOGIN_SUCCESS:
      const { result } = action.payload;
      return {
        loading: false,
        error: result ? "" : "Invalid User Name or Password",
        isLoggedIn: result,
      };
    case LoginActionTypes.LOGIN_ERROR:
      return { loading: false, error: action.payload.error, isLoggedIn: false };
    default:
      return state;
  }
}
