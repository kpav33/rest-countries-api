import React, { useState } from "react";
import styled from "styled-components";
import { IoMoonOutline } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

function Header() {
  const [themeSwitch, setThemeSwitch] = useState("light");

  function handleClick() {
    if (themeSwitch === "light") setThemeSwitch("dark");
    if (themeSwitch === "dark") setThemeSwitch("light");
  }

  const light = (
    <>
      <IoMoonOutline size="14px" /> Dark Mode
    </>
  );

  const dark = (
    <>
      <IoMoonSharp size="14px" /> Light Mode
    </>
  );

  return (
    <HeaderStyled>
      <h1>Where in the world?</h1>
      <ThemeButton onClick={handleClick}>
        {themeSwitch === "light" ? light : dark}
      </ThemeButton>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem 1rem;
  background: white;

  @media only screen and (min-width: 768px) {
    padding: 0.5rem 4rem;
  }

  h1 {
    font-size: 1rem;

    @media only screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const ThemeButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;

  &:hover {
    background: lightgray;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

export default Header;
