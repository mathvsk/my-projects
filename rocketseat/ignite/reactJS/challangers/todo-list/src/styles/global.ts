import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input {
    border: none;
  }

  body {
    background: ${({ theme }) => theme['gray-600']};
  
    ::before {
      content: '';
      width: 100%;
      height: 12.5rem;
      
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      background: ${({ theme }) => theme['gray-700']};;
    }
  } 
`
