import React from "react";
import { connect } from "react-redux";
import Home from "./Components/Home/HomeContainer";
import Login from "./Components/Login/LoginContainer";
import { IRootState } from "./Store";

interface IMasterStateToProps {
  isLoggedIn: boolean;
}

const Master = (props: IMasterStateToProps) => (
  <div className="App">{props.isLoggedIn ? <Home /> : <Login />}</div>
);

const mapStateToProps = (state: IRootState): IMasterStateToProps => ({
  isLoggedIn: state.loginState.isLoggedIn,
});

export default connect(mapStateToProps)(Master);
