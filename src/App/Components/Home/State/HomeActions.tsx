import { IGridData } from "../../Table";

export enum HomeActionType {
  LOADDATA = "load data",
  LOADDATA_REQUEST = "load data - request",
  LOADDATA_SUCCESS = "load data success",
  LOADDATA_ERROR = "load data - error",
}

export const HomeActions = {
  loadData: () => ({
    type: HomeActionType.LOADDATA,
  }),
  loadDataRequest: () => ({
    type: HomeActionType.LOADDATA_REQUEST,
  }),
  loadDataSuccess: (gridData: IGridData) => ({
    payload: { gridData: gridData },
    type: HomeActionType.LOADDATA_SUCCESS,
  }),
  loadDataError: (error: Error) => ({
    payload: { error: error },
    type: HomeActionType.LOADDATA_ERROR,
  }),
};
