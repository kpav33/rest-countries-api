import React from "react";
import styled from "styled-components";

import CountryCard from "./CountryCard";

function CountryCards({ countriesArray, input }) {
  function inputClean(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }

  // Don't use index as key!
  const countries = countriesArray
    .filter((country) => {
      if (input) return country.name.includes(inputClean(input));
      else return country;
    })
    .map((country, index) => <CountryCard key={index} country={country} />);

  return (
    <StyledSection>{countriesArray.length > 0 && countries}</StyledSection>
  );
}

const StyledSection = styled.section`
  padding: 2rem;
`;

export default CountryCards;
