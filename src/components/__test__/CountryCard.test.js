import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CountryCard from "../CountryCard";

let mockedCountryObject = {
  name: "Slovenia",
  population: 2064188,
  region: "Europe",
  capital: "Ljubljana",
  flag: "https://restcountries.eu/data/svn.svg",
};

describe("CountryCard tests", () => {
  test("should render one country card", () => {
    render(
      <Router>
        <CountryCard
          country={mockedCountryObject}
          allCountries={[mockedCountryObject]}
        />
      </Router>
    );
    const countryDivElement = screen.getAllByTestId("country-div-element");
    expect(countryDivElement.length).toBeGreaterThanOrEqual(1);
  });
});
