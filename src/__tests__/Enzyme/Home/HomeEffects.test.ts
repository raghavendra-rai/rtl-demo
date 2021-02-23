import { testSaga } from "redux-saga-test-plan";
import { HomeActionType } from "../../../App/Components/Home/State/HomeActions";
import {
  HomeEffects,
  loadData,
} from "../../../App/Components/Home/State/HomeEffects";

describe("Task Inbox Effects Tests", () => {
  it("should configure all sagas", async () => {
    return testSaga(HomeEffects)
      .next()
      .takeEvery(HomeActionType.LOADDATA, loadData)
      .next()
      .finish()
      .isDone();
  });

  it("should load grid data", async () => {
    // const gridData: IGridData = { rows: [], columns: [] };
    testSaga(loadData)
      .next()
      .put({
        type: HomeActionType.LOADDATA_REQUEST,
      })
      .next() // Service call
      .next()
      .next()
      .isDone();
  });
});
