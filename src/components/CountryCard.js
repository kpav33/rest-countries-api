import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

function CountryCard({ country, allCountries }) {
  // Replace empty spaces with - from country names for URL
  let subPageName = country.name;
  subPageName = subPageName.replace(/\s+/g, "-").toLowerCase();

  return (
    <CountryCardLink
      to={{
        pathname: `/rest-countries-api/country/${subPageName}`,
        state: [country, allCountries],
      }}
      data-testid="country-div-element"
    >
      <div className="img">
        <img src={country.flag} alt={`${country.name} flag`} />
      </div>
      <div className="infoCard">
        <h2>{country.name}</h2>
        <p>
          <span style={{ fontWeight: "600" }}>Population: </span>
          {country.population.toLocaleString()}
        </p>
        <p>
          <span style={{ fontWeight: "600" }}>Region: </span>
          {country.region}
        </p>
        <p>
          <span style={{ fontWeight: "600" }}>Capital: </span>
          {country.capital}
        </p>
      </div>
    </CountryCardLink>
  );
}

CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
  allCountries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const CountryCardLink = styled(Link)`
  border-radius: 10px 10px 10px 10px;
  background: ${({ theme }) => theme.elementsColor};
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  .img {
    width: 100%;
    // height: 200px;
    border-bottom: ${({ theme }) => theme.borderBottom};

    @media only screen and (min-width: 768px) {
      height: 200px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    // max-height: 100px;
    border-radius: 10px 10px 0px 0px;
    //position: relative;
    //flex: 1;
    // object-fit: cover;
    // object-fit: scale-down;
    @media only screen and (min-width: 768px) {
      object-fit: cover;
    }
  }

  .infoCard {
    padding: 1rem;
    // flex-basis: 5rem;

    &:link {
      text-decoration: none;
    }
  }
`;

export default CountryCard;
