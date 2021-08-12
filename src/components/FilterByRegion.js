import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
import Select from "react-select";

function FilterByRegion({ handleChangeFilter, theme }) {
  // react-select possible options
  const options = [
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "Americas" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
    { value: "World", label: "World" },
  ];

  // Custom styling for react-select
  let themeCurrentLight = theme === "light";

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      width: "200px",
      padding: "0.4rem",
      borderRadius: "5px",
      border: "none",
      fontFamily: "Nunito Sans, sans-serif",
      background: themeCurrentLight ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)",
      fontWeight: "600",
      boxShadow: themeCurrentLight
        ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        : "none",
      marginTop: "2rem",
      "@media only screen and (min-width: 768px)": {
        marginTop: "0",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: themeCurrentLight ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: themeCurrentLight ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
      "&:hover": {
        color: themeCurrentLight ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
      },
    }),
    menu: (base) => ({
      ...base,
      // kill the gap
      marginTop: "5px",
      background: themeCurrentLight ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)",
      width: "200px",
      "@media only screen and (min-width: 768px)": {
        width: "100%",
      },
    }),
    menuList: (base) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
      borderRadius: "5px",
    }),
    option: (styles) => {
      return {
        ...styles,
        fontFamily: "Nunito Sans, sans-serif",
        color: themeCurrentLight ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
        background: themeCurrentLight
          ? "hsl(0, 0%, 100%)"
          : "hsl(209, 23%, 22%)",
        fontWeight: "600",
        cursor: "pointer",
        "&:hover": {
          background: themeCurrentLight
            ? "hsl(0, 0%, 94%)"
            : "hsl(207, 26%, 17%)",
        },
      };
    },
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: themeCurrentLight ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
      };
    },
  };

  return (
    <>
      {/* Replaced with React-Select
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
      </StyledSelect>*/}
      <Select
        classNamePrefix="list"
        options={options}
        styles={colourStyles}
        onChange={handleChangeFilter}
        placeholder="Filter by Region"
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </>
  );
}

FilterByRegion.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

/*const StyledSelect = styled.select`
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
`;*/

export default FilterByRegion;
