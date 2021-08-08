import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

function Subpage() {
  const { state } = useLocation();
  const [country, countriesArray] = state;
  const borderCountries = country.borders;

  let arrayNames = [];
  countriesArray.map((country) => {
    const alpha3Code = borderCountries.find(
      (element) => element === country.alpha3Code
    );
    if (alpha3Code) {
      arrayNames.push(country);
    }
    return null;
  });

  const currencies = country.currencies.map((currency) => currency.name);
  const languages = country.languages.map((language) => language.name);

  return (
    <SubpageSection>
      <StyledLink role="button" to="/">
        <IoIosArrowRoundBack size="26px" />
        Back
      </StyledLink>
      <CountryContainer>
        <div className="img">
          <img src={country.flag} alt={`${country.name} flag`} />
        </div>
        <div className="country">
          <h2>{country.name}</h2>
          <div className="countryInfo">
            <div className="left">
              <p>
                <span style={{ fontWeight: "600" }}>Native name: </span>
                {country.nativeName}
              </p>
              <p>
                <span style={{ fontWeight: "600" }}>Population: </span>
                {country.population.toLocaleString()}
              </p>
              <p>
                <span style={{ fontWeight: "600" }}>Region: </span>
                {country.region}
              </p>
              <p>
                <span style={{ fontWeight: "600" }}>Sub Region: </span>
                {country.subregion}
              </p>
              <p>
                <span style={{ fontWeight: "600" }}>Capital: </span>
                {country.capital}
              </p>
            </div>
            <div className="right">
              <p>
                <span style={{ fontWeight: "600" }}>Top Level Domain: </span>
                {country.topLevelDomain.join(", ")}
              </p>
              <p>
                <span style={{ fontWeight: "600" }}>Currencies: </span>
                {currencies.join(", ")}
              </p>
              <p>
                <span style={{ fontWeight: "600" }}>Languages: </span>
                {languages.join(", ")}
              </p>
            </div>
          </div>
          <div>
            <h3>Border Countries:</h3>
            <BorderCountriesDiv>
              {arrayNames.length > 0
                ? arrayNames.map((country, index) => (
                    <StyledLinkBorder
                      key={index}
                      role="button"
                      to={{
                        pathname: `/rest-countries-api/country/${country.name}`,
                        state: [country, countriesArray],
                      }}
                    >
                      {country.name}
                    </StyledLinkBorder>
                  ))
                : "No bordering countries."}
            </BorderCountriesDiv>
          </div>
        </div>
      </CountryContainer>
    </SubpageSection>
  );
}

const SubpageSection = styled.section`
  padding: 3rem 1rem 1rem 1rem;

  @media only screen and (min-width: 768px) {
    padding: 3rem 4rem;
  }
`;

const StyledLink = styled(Link)`
  padding: 0.5rem 1.5rem 0.5rem 2.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.elementsColor};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  svg {
    position: absolute;
    top: 5px;
    left: 10px;
  }
`;

const CountryContainer = styled.div`
  padding: 2rem 1rem;
  margin-top: 1rem;

  @media only screen and (min-width: 768px) {
    display: flex;
    padding: 2rem 0;
  }

  .img {
    @media only screen and (min-width: 768px) {
      width: 450px;
    }
  }

  .country {
    @media only screen and (min-width: 768px) {
      padding-left: 4rem;
      display: flex;
      flex-direction: column;
    }

    .countryInfo {
      @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
      }

      .right {
        padding: 1rem 0;

        @media only screen and (min-width: 768px) {
          padding: 0 0 0 4rem;
        }
      }
    }
  }

  img {
    width: 100%;
  }
`;

const BorderCountriesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledLinkBorder = styled(Link)`
  padding: 0.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.elementsColor};
  border-radius: 5px;
  margin: 6px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default Subpage;
