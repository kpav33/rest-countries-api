import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

function Subpage() {
  // const { countryName } = useParams();
  const { state } = useLocation();
  // console.log(countryName);
  // console.log(state);
  const [country, countriesArray] = state;
  // console.log(country);
  // console.log(country, countriesArray);
  // console.log(array);
  //     const thisProduct = productsData.find(prod => prod.id === productId)
  // cioc
  const borderCountries = country.borders;
  //console.log(borderCountries);
  //console.log(countriesArray);

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
  // console.log(arrayNames);

  const currencies = country.currencies.map((currency) => currency.name);
  const languages = country.languages.map((language) => language.name);
  // console.log(languages);

  return (
    <SubpageSection>
      <StyledLink role="button" to="/">
        <IoIosArrowRoundBack size="26px" />
        Back
      </StyledLink>
      <CountryContainer>
        <img src={country.flag} alt={`${country.name} flag`} />
        <h2>{country.name}</h2>
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
        <br />
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
        <br />
        <h3>Border Countries</h3>
        <BorderCountriesDiv>
          {arrayNames.length > 0
            ? arrayNames.map((country, index) => (
                <StyledLinkBorder
                  key={index}
                  role="button"
                  to={{
                    pathname: `/country/${country.name}`,
                    state: [country, countriesArray],
                  }}
                >
                  {country.name}
                </StyledLinkBorder>
              ))
            : "No bordering countries."}
        </BorderCountriesDiv>
      </CountryContainer>
    </SubpageSection>
  );
}

/* to={{
    pathname: `/country/${name}`,
    state: [country, allCountries],
  }}*/

const SubpageSection = styled.section`
  padding: 3rem 1rem;

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
  width: 100%;
  padding: 2rem 1rem;

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
  //box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  //position: relative;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default Subpage;
