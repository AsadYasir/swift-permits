import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fonts.text};
    color: ${(props) => props.theme.colors.text};
  }
  
`;

export default GlobalStyle;
