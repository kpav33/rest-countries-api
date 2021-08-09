import React, { useState } from "react";
import { GlobalStyles } from "./GlobalStyle.style";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes.style";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Subpage from "./components/Subpage";

function App() {
  // Track current theme
  const [theme, setTheme] = useState("light");

  function themeToggler() {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  }

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
