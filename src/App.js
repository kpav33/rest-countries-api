import React from "react";
import { GlobalStyles } from "./GlobalStyle.style";

import Header from "./components/Header";
import Main from "./components/Main";

// Your challenge is to integrate with the [REST Countries API](https://restcountries.eu) to pull country data and display it like in the designs.
/*
Your users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode (optional)
*/

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
    </>
  );
}

export default App;