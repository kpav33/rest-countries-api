import React from "react";
import styled from "styled-components";

import CountryCard from "./CountryCard";

function CountryCards({ countriesArray, input, select }) {
  function inputClean(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }

  // Don't use index as key!
  const countries = countriesArray
    .filter((country) => {
      if (select) return country.region === select;
      else return country;
    })
    .filter((country) => {
      if (input) return country.name.includes(inputClean(input));
      else return country;
    })
    .map((country, index) => (
      <CountryCard
        key={index}
        country={country}
        allCountries={countriesArray}
      />
    ));

  return (
    <StyledSection>{countriesArray.length > 0 && countries}</StyledSection>
  );
}

const StyledSection = styled.section`
  padding: 2rem 2rem 0 2rem;

  @media only screen and (min-width: 768px) {
    padding: 3rem 0 0 0;
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr 1fr;
    grid-gap: 60px;
  }
`;

export default CountryCards;
