import React, { useState } from "react";
import { GlobalStyles } from "./GlobalStyle.style";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes.style";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Subpage from "./components/Subpage";

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
  const [theme, setTheme] = useState("light");

  function themeToggler() {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  }

  // console.log(theme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header theme={theme} themeToggler={themeToggler} />
      <Switch>
        <Route exact path={["/", "/rest-countries-api"]}>
          <Main theme={theme} />
        </Route>
        <Route
          path={[
            "/rest-countries-api/country/:countryName",
            "/country/:countryName",
          ]}
        >
          <Subpage />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
