import { render, screen, fireEvent, mount } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import Subpage from "../Subpage";

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

describe("Subpage tests", () => {
  test("should render all 250 countries by default", async () => {
    // render(
    //   <BrowserRouter>
    //     <Subpage />
    //   </BrowserRouter>
    // );
    // render(
    //   <MemoryRouter
    //     initialEntries={[mockedCountryObjectArray[0], mockedCountryObjectArray]}
    //   >
    //     <Subpage />
    //   </MemoryRouter>
    // );
    // expected(wrapper.find(User)).toHaveLength(2);
  });
});
