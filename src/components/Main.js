import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import FilterByRegion from "./FilterByRegion";
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

  const [select, setSelect] = useState("");

  function handleFilterRegion(event) {
    const { value } = event.target;
    setSelect(value);
  }

  // console.log(select);

  // Wrap input with a form???

  return (
    <StyledMain>
      <SearchBar input={input} handleChange={handleChange} />
      <FilterByRegion select={select} handleFilterRegion={handleFilterRegion} />
      <CountryCards
        countriesArray={countriesArray}
        input={input}
        select={select}
      />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding: 1rem;
`;

export default Main;
