import React from "react";
import { Provider } from "react-redux";
import { render as rtlRender } from "@testing-library/react";
import App from "./App";
import { rootEffetcs, sagaMiddleware, store } from "./App/Store";

sagaMiddleware.run(rootEffetcs);

const render = ({ initialState = {}, ...renderOptions } = {}) => {
  const Wrapper = ({ children }: any) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(<App />, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
