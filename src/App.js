import { useRef } from "react";
import { ThemeProvider } from "styled-components";

import theme from "./assets/themes/theme";
import GlobalStyle from "./assets/themes/globalStyles";

import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ApplySection from "./components/ApplySection";

function App() {
  const aboutRef = useRef(null);
  const applyRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Navbar aboutRef={aboutRef} applyRef={applyRef} />
        <HeroSection />

        <AboutSection aboutRef={aboutRef} />
        <ApplySection applyRef={applyRef} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
