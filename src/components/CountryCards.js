import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CountryCard from "./CountryCard";

function CountryCards({ countriesArray, input, select }) {
  // Parse input to make sure it always starts with a capital letter
  /* Replaced by using toLowerCase() in filter method
  function inputClean(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }
  */

  // Display the correct countries based on the user's input and chosen filter
  const countries = countriesArray
    .filter((country) => {
      if (select === "World") return country;
      if (select) return country.region === select;
      else return country;
    })
    .filter((country) => {
      if (input) return country.name.toLowerCase().includes(input);
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

CountryCards.propTypes = {
  countriesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  input: PropTypes.string.isRequired,
  select: PropTypes.string.isRequired,
};

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
