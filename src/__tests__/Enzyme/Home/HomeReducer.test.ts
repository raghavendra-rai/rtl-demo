import { HomeActionType } from "../../../App/Components/Home/State/HomeActions";
import HomeReducer from "../../../App/Components/Home/State/HomeReducer";

describe("Home reducer tests", () => {
  const initialState = { loading: false, gridData: { rows: [], columns: [] } };
  it("should return the initial state", () => {
    expect(HomeReducer(undefined, { type: null })).toEqual(initialState);
  });

  it("should load grid data - request", () => {
    const existingState = {
      ...initialState,
      loading: false,
      gridData: { rows: [], columns: [] },
    };
    expect(
      HomeReducer(existingState, { type: HomeActionType.LOADDATA_REQUEST })
    ).toEqual({
      ...initialState,
      loading: true,
      gridData: {},
    });
  });

  it("should load grid data - success", () => {
    const existingState = {
      ...initialState,
      loading: true,
      gridData: { rows: [], columns: [] },
    };
    const result = { rows: [], columns: [] };
    expect(
      HomeReducer(existingState, {
        type: HomeActionType.LOADDATA_SUCCESS,
        payload: { gridData: result },
      })
    ).toEqual({
      ...initialState,
      loading: false,
      gridData: result,
    });
  });

  it("should load grid data - error", () => {
    const existingState = {
      ...initialState,
      loading: true,
      gridData: { rows: [], columns: [] },
    };
    const error = new Error("This is an error");
    expect(
      HomeReducer(existingState, {
        type: HomeActionType.LOADDATA_ERROR,
        payload: { error },
      })
    ).toEqual({
      ...initialState,
      loading: false,
      gridData: {},
    });
  });
});
