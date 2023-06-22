import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    padding: 2rem 10rem;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
