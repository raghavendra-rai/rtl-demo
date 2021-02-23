import { HomeActionType } from "./HomeActions";
import { IHomeState } from "./IHomeState";

export default function HomeReducer(
  state: IHomeState = { loading: false, gridData: { rows: [], columns: [] } },
  action: any
) {
  switch (action.type) {
    case HomeActionType.LOADDATA_REQUEST:
      return { ...state, loading: true, gridData: {} };
    case HomeActionType.LOADDATA_SUCCESS:
      return { loading: false, gridData: action.payload.gridData };
    case HomeActionType.LOADDATA_ERROR:
      return { loading: false, gridData: {} };
    default:
      return state;
  }
}
