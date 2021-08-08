import React from "react";
import styled from "styled-components";

function FilterByRegion({ select, handleFilterRegion }) {
  return (
    <StyledSelect
      value={select}
      onChange={handleFilterRegion}
      name="filterByRegion"
    >
      <option value="">Filter By Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </StyledSelect>
  );
}

const StyledSelect = styled.select`
  margin-top: 1rem;
  width: 50%;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 5px;
  border: none;
  font-family: "Nunito Sans", sans-serif;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.elementsColor};
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media only screen and (min-width: 768px) {
    margin-top: 0;
    width: 200px;
  }
`;

export default FilterByRegion;