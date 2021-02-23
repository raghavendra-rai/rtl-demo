import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import Login, { ILoginDispatchToProps, ILoginStateToProps } from "./Login";
import { LoginActions } from "./State/LoginActions";
import { IRootState } from "../../Store";

const mapStateToProps = (state: IRootState) => {
  const propertyProps: ILoginStateToProps = {
    loading: state.loginState.loading,
    error: state.loginState.error,
  };
  return propertyProps;
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  const mapDispatchToProps: ILoginDispatchToProps = {
    login: (username: string, password: string) =>
      dispatch(LoginActions.login(username, password)),
  };
  return mapDispatchToProps;
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
