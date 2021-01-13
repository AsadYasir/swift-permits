import { ThemeProvider } from "styled-components";

import theme from "./assets/themes/theme";
import GlobalStyle from "./assets/themes/globalStyles";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Navbar />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
