import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import CountryCards from "./CountryCards";

function Main() {
  const [input, setInput] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setInput(value);
  }

  //console.log(input);

  const [countriesArray, setCountriesArray] = useState([]);

  console.log(countriesArray[0]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        setCountriesArray(data);
      });
  }, []);

  const [select, setSelect] = useState("Africa");

  function handleFilterRegion(event) {
    const { value } = event.target;
    setSelect(value);
  }

  console.log(select);

  // Wrap input with a form???

  return (
    <StyledMain>
      <SearchBar input={input} handleChange={handleChange} />
      <select
        value={select}
        onChange={handleFilterRegion}
        name="filterByRegion"
      >
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <CountryCards countriesArray={countriesArray} input={input} />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding: 1rem;
`;

export default Main;
