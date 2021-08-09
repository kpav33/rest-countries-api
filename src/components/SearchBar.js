import React from "react";
import PropTypes from "prop-types";
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
      <AiOutlineSearch size="24px" />
    </SearchBarWrapper>
  );
}

SearchBar.propTypes = {
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 4rem;
  border-radius: 5px;
  border: none;
  font-family: "Nunito Sans", sans-serif;
  color: ${({ theme }) => theme.inputColor};
  background: ${({ theme }) => theme.elementsColor};
  font-weight: 300;
  box-shadow: ${({ theme }) => theme.boxShadow};

  &::placeholder {
    color: ${({ theme }) => theme.inputColor};
    font-weight: 600;
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${({ theme }) => theme.inputColor};
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${({ theme }) => theme.inputColor};
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: ${({ theme }) => theme.inputColor};
  }
  :-ms-input-placeholder {
    /* Edge/IE 10+ */
    color: ${({ theme }) => theme.inputColor};
  }

  @media only screen and (min-width: 768px) {
    width: 500px;
  }
`;

const SearchBarWrapper = styled.div`
  position: relative;
  fill: "red";

  @media only screen and (min-width: 768px) {
    // todo
  }

  svg {
    position: absolute;
    right: 85%;
    top: 27%;
    fill: ${({ theme }) => theme.inputColor};

    @media only screen and (min-width: 768px) {
      right: 90%;
    }
  }
`;

export default SearchBar;
