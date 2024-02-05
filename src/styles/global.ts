import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.blue};
    border-radius: 6px;
  }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  img {
    display: block;
  }

  body {
    background-color: ${({ theme }) => theme.color['base-background']};
    color: ${({ theme }) => theme.color['base-title']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: ${({ theme }) => theme.font['text-m']}
  }

  button {
    border: 0;
    line-height: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
