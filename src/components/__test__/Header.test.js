import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";

const mockedThemeToggler = jest.fn();

const clickButton = (num) => {
  const buttonElement = screen.getByRole("button");
  for (let i = 0; i < num; i++) {
    fireEvent.click(buttonElement);
  }
};

describe("Header tests", () => {
  test("should render title text", () => {
    render(<Header theme="light" themeToggler={mockedThemeToggler} />);
    const headingTitle = screen.getByText(/where in the world/i);
    expect(headingTitle).toBeInTheDocument();
  });

  test("should trigger function on button click", () => {
    render(<Header theme="light" themeToggler={mockedThemeToggler} />);
    clickButton(5);
    expect(mockedThemeToggler).toHaveBeenCalledTimes(5);
  });

  test("button should have Dark Mode text", () => {
    render(<Header theme="light" themeToggler={mockedThemeToggler} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent(/dark mode/i);
  });

  test("button should have Light Mode text", () => {
    render(<Header theme="dark" themeToggler={mockedThemeToggler} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent(/light mode/i);
  });
});
