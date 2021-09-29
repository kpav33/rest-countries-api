import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "../../App";

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

  test("toggle theme to dark mode", () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const buttonElement = screen.getByRole("button", { name: /dark mode/i });
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent(/light mode/i);
  });

  test("toggle theme to dark mode and back to light mode", () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const buttonElement = screen.getByRole("button", { name: /dark mode/i });
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent(/dark mode/i);
  });
});
