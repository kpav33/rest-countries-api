import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import FilterByRegion from "./FilterByRegion";
import CountryCards from "./CountryCards";

function Main({ theme }) {
  // Track users input into the input field
  const [input, setInput] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setInput(value);
  }

  // Fetch array of countries from the API and store it
  const [countriesArray, setCountriesArray] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        setCountriesArray(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Track users choice from the select field
  const [select, setSelect] = useState("");

  /* Replaced with react-select
  function handleFilterRegion(event) {
    const { value } = event.target;
    setSelect(value);
  }
  */

  function handleChangeFilter(value) {
    setSelect(value.label);
  }

  return (
    <StyledMain>
      <StyledFiltersDiv>
        <SearchBar input={input} handleChange={handleChange} />
        <FilterByRegion handleChangeFilter={handleChangeFilter} theme={theme} />
      </StyledFiltersDiv>
      <CountryCards
        countriesArray={countriesArray}
        input={input}
        select={select}
      />
    </StyledMain>
  );
}

Main.propTypes = {
  theme: PropTypes.string.isRequired,
};

const StyledMain = styled.main`
  padding: 1rem;

  @media only screen and (min-width: 768px) {
    padding: 3rem 4rem;
  }
`;

const StyledFiltersDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    // padding: 4rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Main;
