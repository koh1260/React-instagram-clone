import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing:border-box;
    outline:none;
  }
  html, body, #root {
    height: 100%;
  }
  a {
    text-decoration:none;
  }
  button {
    cursor: pointer;
  }
`
export default GlobalStyle;