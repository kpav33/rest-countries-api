import React from "react";
import styled from "styled-components";

function CountryCard({ country }) {
  return (
    <CountryCardDiv onClick={() => console.log("Link to country subpage")}>
      <div className="imgTest">
        <img src={country.flag} alt={`${country.name} flag`} />
      </div>
      <div className="test">
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
    </CountryCardDiv>
  );
}

const CountryCardDiv = styled.div`
  border-radius: 10px 10px 10px 10px;
  background: ${({ theme }) => theme.elementsColor};
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  .imgTest {
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

  .test {
    padding: 1rem;
    // flex-basis: 5rem;
  }
`;

export default CountryCard;
