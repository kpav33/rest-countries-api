import React, { useState } from "react";
import styled from "styled-components";

function Main() {
  const [input, setInput] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setInput(value);
  }

  console.log(input);

  // Wrap input with a form???

  return (
    <main>
      <StyledInput
        type="text"
        name="searchInput"
        placeholder="Search for a country..."
        value={input}
        onChange={handleChange}
      />
      <p>Select form as filter</p>
    </main>
  );
}

const StyledInput = styled.input``;

export default Main;
