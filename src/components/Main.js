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

  console.log(input);

  const [countriesArray, setCountriesArray] = useState([]);

  // console.log(countriesArray);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        setCountriesArray(data);
      });
  }, []);

  // Wrap input with a form???

  return (
    <StyledMain>
      <SearchBar input={input} handleChange={handleChange} />
      <p>Select form as filter</p>
      <CountryCards countriesArray={countriesArray} input={input} />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding: 1rem;
`;

export default Main;
