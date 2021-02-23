import React from "react";
import Loader from "../Loader";
import Table, { IGridData } from "../Table";

export interface IHomeStateToProps {
  loading: boolean;
  gridData: IGridData;
}

export interface IHomeDispatchToProps {
  loadData: () => void;
}

export interface IHomeProps extends IHomeStateToProps, IHomeDispatchToProps {}

export default class Home extends React.Component<IHomeProps> {
  constructor(props: any) {
    super(props);
    this.state = { loading: false, gridData: {} };
  }

  public render() {
    const { loading, gridData } = this.props;
    return (
      <div>
        <h2>Home page</h2>
        <button onClick={this.props.loadData}>Load data</button>
        {loading ? (
          <Loader />
        ) : (
          <div style={{ margin: 20, height: 400 }}>
            <Table data={gridData} />
          </div>
        )}
      </div>
    );
  }
}
