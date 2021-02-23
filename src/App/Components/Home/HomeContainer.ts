import { AnyAction, Dispatch } from "redux";
import Home, { IHomeDispatchToProps, IHomeStateToProps } from "./Home";
import { HomeActions } from "./State/HomeActions";
import { IRootState } from "../../Store";
import { connect } from "react-redux";

const mapStateToProps = (state: IRootState) => {
  const propertyProps: IHomeStateToProps = {
    loading: state.homeState.loading,
    gridData: state.homeState.gridData,
  };
  return propertyProps;
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  const methodProps: IHomeDispatchToProps = {
    loadData: () => {
      dispatch(HomeActions.loadData());
    },
  };
  return methodProps;
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
