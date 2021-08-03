import { createGlobalStyle } from "styled-components";

/*
The designs were created to the following widths:
- Mobile: 375px
- Desktop: 1440px 

## Typography

### Body Copy

- Homepage Items: 14px
- Detail Page: 16px 
*/

export const GlobalStyles = createGlobalStyle`
    :root {
        // Dark mode
        --dark-mode-text: hsl(0, 0%, 100%);
        --dark-mode-elements: hsl(209, 23%, 22%);
        --dark-mode-background: hsl(207, 26%, 17%);
        // Light mode
        --light-mode-text: hsl(200, 15%, 8%);
        --light-mode-input: hsl(0, 0%, 52%);
        --light-mode-background: hsl(0, 0%, 94%);
        --light-mode-elements: hsl(0, 0%, 100%);
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }
    html {
        max-width: 1920px;
        margin: 0 auto;
    }

    body {
        margin: 0;
        padding: 0;
        color: var(--light-mode-text);
        background: var(--light-mode-background);
        font-size: 14px;
        font-family: 'Nunito Sans', sans-serif;

        @media only screen and (min-width: 768px) {
            // To do
        }
    }

`;
