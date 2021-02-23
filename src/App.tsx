import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { rootEffetcs, sagaMiddleware, store } from "./App/Store";
import Master from "./App/Master";

sagaMiddleware.run(rootEffetcs);

function App() {
  return (
    <Provider store={store}>
      <Master />
    </Provider>
  );
}

export default App;
