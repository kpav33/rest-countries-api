import { render, screen } from "@testing-library/react";
import SearchBar from "../SearchBar";

const mockedHandleChange = jest.fn();

describe("SearchBar tests", () => {
  test("should render input element", () => {
    render(<SearchBar input="Slovenia" handleChange={mockedHandleChange} />);
    const inputElement = screen.getByPlaceholderText(
      /search for a country.../i
    );
    expect(inputElement).toBeInTheDocument();
  });

  test("should use text based on input prop", () => {
    render(<SearchBar input="Slovenia" handleChange={mockedHandleChange} />);
    const inputElement = screen.getByPlaceholderText(
      /search for a country.../i
    );
    expect(inputElement.value).toBe("Slovenia");
  });
});
