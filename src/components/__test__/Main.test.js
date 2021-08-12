import { render, screen } from "@testing-library/react";
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
});
