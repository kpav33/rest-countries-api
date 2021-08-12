import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CountryCards from "../CountryCards";

let mockedCountryObjectArray = [
  {
    name: "Slovenia",
    population: 2064188,
    region: "Europe",
    capital: "Ljubljana",
    flag: "https://restcountries.eu/data/svn.svg",
  },
  {
    name: "Croatia",
    population: 2064188,
    region: "Europe",
    capital: "Zagreb",
    flag: "https://restcountries.eu/data/cro.svg",
  },
  {
    name: "Afghanistan",
    population: 2064188,
    region: "Asia",
    capital: "Kabul",
    flag: "https://restcountries.eu/data/afg.svg",
  },
];

describe("CountryCards tests", () => {
  test("should render the right amount of country cards, based on select filter", () => {
    render(
      <Router>
        <CountryCards
          countriesArray={mockedCountryObjectArray}
          input=""
          select="Europe"
        />
      </Router>
    );
    const countryDivElement = screen.getAllByTestId("country-div-element");
    expect(countryDivElement.length).toBeGreaterThan(1);
  });

  test("should render all passed countries as country cards", () => {
    render(
      <Router>
        <CountryCards
          countriesArray={mockedCountryObjectArray}
          input=""
          select={""}
        />
      </Router>
    );
    const countryDivElement = screen.getAllByTestId("country-div-element");
    expect(countryDivElement.length).toBe(3);
  });

  test("should render all passed countries as country cards with World selected as filter", () => {
    render(
      <Router>
        <CountryCards
          countriesArray={mockedCountryObjectArray}
          input=""
          select={"World"}
        />
      </Router>
    );
    const countryDivElement = screen.getAllByTestId("country-div-element");
    expect(countryDivElement.length).toBe(3);
  });

  test("should render only one country based on the input string", () => {
    render(
      <Router>
        <CountryCards
          countriesArray={mockedCountryObjectArray}
          input="slov"
          select=""
        />
      </Router>
    );
    const countryDivElement = screen.getAllByTestId("country-div-element");
    expect(countryDivElement.length).toBe(1);
  });

  test("input and select filter should work together to display proper countries", () => {
    render(
      <Router>
        <CountryCards
          countriesArray={mockedCountryObjectArray}
          input="slov"
          select="Africa"
        />
      </Router>
    );
    const countryDivElement = screen.queryAllByTestId("country-div-element");
    expect(countryDivElement.length).toBe(0);
  });
});
