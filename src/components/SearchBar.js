import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar({ input, handleChange }) {
  return (
    <SearchBarWrapper>
      <StyledInput
        type="text"
        name="searchInput"
        placeholder="Search for a country..."
        value={input}
        onChange={handleChange}
      />
      <AiOutlineSearch size="24px" fill="var(--light-mode-input)" />
    </SearchBarWrapper>
  );
}

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 4rem;
  border-radius: 5px;
  border: none;
  font-family: "Nunito Sans", sans-serif;
  color: var(--light-mode-input);
  font-weight: 300;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media only screen and (min-width: 768px) {
    width: 500px;
  }
`;

const SearchBarWrapper = styled.div`
  position: relative;

  @media only screen and (min-width: 768px) {
    // todo
  }

  svg {
    position: absolute;
    right: 85%;
    top: 27%;

    @media only screen and (min-width: 768px) {
      right: 90%;
      // top: 27%;
    }
  }
`;

export default SearchBar;
