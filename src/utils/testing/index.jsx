import React from "react";
import MemoryRouter from "react-router-dom";
import { render as initialRender } from "@testing-library/react";
import Router from "react-router-dom";
import { createMemoryHistory } from "history";

export function Wrapper({ children }) {
  return (
    <div className="m-2">
      <div style={{ width: 300 }}>{children}</div>
    </div>
  );
}

// test utils file
function renderWithRouter(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  const RouterWrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  );
  return {
    ...initialRender(ui, { wrapper: RouterWrapper }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithRouter as render };
