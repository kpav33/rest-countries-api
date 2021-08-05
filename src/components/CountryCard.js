import React from "react";
import styled from "styled-components";

function CountryCard({ country }) {
  return (
    <CountryCardDiv onClick={() => console.log("Link to country subpage")}>
      <img src={country.flag} alt={`${country.name} flag`} />
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
  background: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  margin-bottom: 3rem;

  img {
    max-width: 100%;
    border-radius: 10px 10px 0px 0px;
    position: relative;
  }

  .test {
    padding: 1rem;
  }
`;

export default CountryCard;
