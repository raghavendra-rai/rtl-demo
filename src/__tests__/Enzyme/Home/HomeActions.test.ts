import {
  HomeActions,
  HomeActionType,
} from "../../../App/Components/Home/State/HomeActions";
import { IGridData } from "../../../App/Components/Table";

describe("Home Action Tests", () => {
  it("should create an action to load grid data", () => {
    const expectedAction = {
      type: HomeActionType.LOADDATA,
    };
    expect(HomeActions.loadData()).toEqual(expectedAction);
  });

  it("should create an action to load grid data request", () => {
    const expectedAction = {
      type: HomeActionType.LOADDATA_REQUEST,
    };
    expect(HomeActions.loadDataRequest()).toEqual(expectedAction);
  });
  it("should create an action to load grid data success", () => {
    const gridData: IGridData = { rows: [], columns: [] };
    const expectedAction = {
      payload: { gridData },
      type: HomeActionType.LOADDATA_SUCCESS,
    };
    expect(HomeActions.loadDataSuccess(gridData)).toEqual(expectedAction);
  });
  it("should create an action to load grid data error", () => {
    const error: Error = new Error("This is an error");
    const expectedAction = {
      payload: { error },
      type: HomeActionType.LOADDATA_ERROR,
    };
    expect(HomeActions.loadDataError(error)).toEqual(expectedAction);
  });
});
