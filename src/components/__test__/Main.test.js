import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Main from "../Main";

describe("Main tests", () => {
  test("should render all 250 countries by default", async () => {
    render(
      <BrowserRouter>
        <Main theme="light" />
      </BrowserRouter>
    );
    const countryDivElement = await screen.findAllByTestId(
      "country-div-element"
    );
    expect(countryDivElement.length).toBe(250);
  });

  test("test handleChange function working", async () => {
    render(
      <BrowserRouter>
        <Main theme="light" />
      </BrowserRouter>
    );
    const inputElement = screen.getByPlaceholderText(
      /search for a country.../i
    );
    fireEvent.change(inputElement, { target: { value: "testing" } });
    expect(inputElement).toHaveValue("testing");
  });

  test("test handleChangeFilter function working", async () => {
    render(
      <BrowserRouter>
        <Main theme="light" />
      </BrowserRouter>
    );
    const result = render(
      <BrowserRouter>
        <Main theme="light" />
      </BrowserRouter>
    );
    // screen.debug();
    const selectInputElement = result.container.querySelector(
      "#react-select-5-input"
    );
    const selectControlElement =
      result.container.querySelector(".list__control");
    fireEvent.change(selectInputElement, { target: { value: "Africa" } });
    fireEvent.mouseDown(selectControlElement);
    expect(selectInputElement).toHaveValue("Africa");
  });
});

//.list__control
