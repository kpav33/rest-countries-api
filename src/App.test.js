import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import userEvent from "@testing-library/user-event";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    div
  );
});

test("renders learn react link", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  // screen.debug();

  const linkElement = screen.getByText(/where in the world?/i);
  expect(linkElement).toBeInTheDocument();
});

test("button click toggles theme switch", () => {
  render(<Header theme="light" themeToggler={() => console.log("OK")} />);
  const button = screen.getByRole("button");
  screen.debug();

  fireEvent.click(button);
  expect(screen.getByTitle("dark")).toBeInTheDocument();
  expect(screen.getByText("Dark Mode")).toBeInTheDocument();
  screen.debug();

  fireEvent.click(button);
  expect(screen.queryByTitle("light")).not.toBeInTheDocument();
  expect(screen.queryByText("Light Mode")).not.toBeInTheDocument();
  screen.debug();
});
