import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import FilterByRegion from "./FilterByRegion";
import CountryCards from "./CountryCards";

function Main(theme) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setInput(value);
  }

  //console.log(input);

  const [countriesArray, setCountriesArray] = useState([]);

  // console.log(countriesArray[0]);

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

  const [select, setSelect] = useState("");

  function handleFilterRegion(event) {
    const { value } = event.target;
    setSelect(value);
  }

  function handleChangeFilter(value) {
    // console.log(value);
    setSelect(value.label);
  }

  // console.log(select);

  // Wrap input with a form???

  return (
    <StyledMain>
      <StyledFiltersDiv>
        <SearchBar input={input} handleChange={handleChange} />
        <FilterByRegion
          select={select}
          handleFilterRegion={handleFilterRegion}
          handleChangeFilter={handleChangeFilter}
          theme={theme}
        />
      </StyledFiltersDiv>
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
