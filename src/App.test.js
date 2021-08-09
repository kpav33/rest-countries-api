import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import Header from "./components/Header";

test("renders learn react link", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/where in the world?/i);
  expect(linkElement).toBeInTheDocument();
});

test("button click toggles theme switch", () => {
  render(<Header theme="light" themeToggler={() => console.log("OK")} />);
  const button = screen.getByRole("button");

  fireEvent.click(button);
  expect(screen.getByTitle("dark")).toBeInTheDocument();
  expect(screen.getByText("Dark Mode")).toBeInTheDocument();

  fireEvent.click(button);
  expect(screen.queryByTitle("light")).not.toBeInTheDocument();
  expect(screen.queryByText("Light Mode")).not.toBeInTheDocument();
});
