import React from "react";
import styled from "styled-components";

import Img from "../assets/images/AboutUs.svg";

function AboutSection({ aboutRef }) {
  return (
    <Container ref={aboutRef}>
      <Content>
        <h1>About us</h1>
        <p>
          The occupational traffic permit is one of the most important things in
          the company when carrying out freight transport. In fact, it is a
          prerequisite for doing business traffic at all.{" "}
        </p>
        <HighlightedNote>
          How do you do when you need to obtain a commercial traffic permit for
          freight transport to your business?
        </HighlightedNote>
      </Content>
      <img src={Img} alt="" />
    </Container>
  );
}

export default AboutSection;

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  width: 100%;

  margin-top: 350px;
  margin-bottom: 100px;

  img {
    max-width: min(100%, 400px);
  }

  @media ${(props) => props.theme.devices.tablet} {
    margin-top: 350px;
    padding-top: 200px;

    display: grid;
    grid-template-columns: 1fr 1fr;

    img {
      max-width: 100%;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 470px;

  h1 {
    color: ${(props) => props.theme.colors.red};
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;

    margin: 20px 0 65px;
  }

  p {
    font-size: 18px;
    font-weight: 300;
    width: 100%;
    line-height: 1.5em;

    margin-bottom: 65px;
  }

  @media ${(props) => props.theme.devices.tablet} {
    h1 {
      margin: 65px 0;
    }
  }
`;

const HighlightedNote = styled.div`
  background-color: ${(props) => props.theme.colors.rose};
  border-left: 8px solid ${(props) => props.theme.colors.red};
  border-radius: 5px;
  padding: 30px 45px;

  font-weight: 500;
  font-size: 24px;
`;
