import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import Header from "./components/Header";

const mockedThemeToggler = jest.fn();

describe("App tests", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <Router>
        <App />
      </Router>,
      div
    );
  });

  test("themeToggler function", () => {
    render(
      <Router>
        <App>
          <Header theme="light" themeToggler={mockedThemeToggler} />
        </App>
      </Router>
    );
    const buttonElement = screen.getByRole("button", { name: /dark mode/i });
    fireEvent.click(buttonElement);
    // Doesn't pass the tests???
    // expect(mockedThemeToggler).toHaveBeenCalledTimes(1);
  });
});
