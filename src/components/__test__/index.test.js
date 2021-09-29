import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../../App";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("index.js render test", () => {
  test("should render without crashing", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("../../index");
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>,
      div
    );
  });
});
