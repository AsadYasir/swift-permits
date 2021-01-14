import React from "react";
import styled from "styled-components";

import Img from "../assets/images/ThinkingMan.svg";

function FAQSection({ faqRef }) {
  return (
    <Container ref={faqRef}>
      <ContentHeader>
        <div>
          <h1>FAQ</h1>
          <p>Questions and Answers on Professional Traffic Permits:</p>
        </div>
        <img src={Img} alt="Thinking man" />
      </ContentHeader>

      <Background />
    </Container>
  );
}

export default FAQSection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
  padding-right: 60px;

  position: relative;
`;

const ContentHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  h1 {
    color: ${(props) => props.theme.colors.red};
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;

    margin: 65px 0;
  }

  p {
    font-size: 48px;
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.title};
    max-width: 550px;
    line-height: 1.5em;

    margin-bottom: 65px;
  }

  img {
    max-width: 100%;
  }
`;

const Background = styled.div`
  position: absolute;
  z-index: -1;
  left: 30%;
  top: -100px;

  border-top-left-radius: 150px;

  width: 1000px;
  height: 600px;
  background-color: ${(props) => props.theme.colors.rose};
`;
