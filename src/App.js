import { ThemeProvider } from "styled-components";

import theme from "./assets/themes/theme";
import GlobalStyle from "./assets/themes/globalStyles";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import { useRef } from "react";

function App() {
  const aboutRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Navbar aboutRef={aboutRef} />
        <HeroSection />
        <AboutSection aboutRef={aboutRef} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
