import React from "react";
import styled from "styled-components";

import Img from "../assets/images/ThinkingMan.svg";
import FAQDropdown from "./FAQDropdown";

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

      <Content>
        <Column>
          <FAQDropdown question={"What is a professional traffic permit?"}>
            Traffic permits are a requirement for conducting professional
            traffic.
          </FAQDropdown>
          <FAQDropdown question={"How to check the traffic condition?"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet ultrices felis. Pellentesque id imperdiet massa. Suspendisse
            imperdiet massa sit amet metus rutrum, a feugiat diam convallis.
            Vestibulum tellus nibh, lacinia sit amet magna id, interdum rutrum
            massa. Integer ut lorem libero.
          </FAQDropdown>
          <FAQDropdown
            question={
              "What are the requirements for a professional traffic permit?"
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet ultrices felis. Pellentesque id imperdiet massa. Suspendisse
            imperdiet massa sit amet metus rutrum, a feugiat diam convallis.
          </FAQDropdown>
          <FAQDropdown
            question={
              "Are there professional traffic permit training courses at a distance?"
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet ultrices felis. Pellentesque id imperdiet massa. Suspendisse
            imperdiet massa sit amet metus rutrum, a feugiat diam convallis.
            Vestibulum tellus nibh, lacinia sit amet magna id, interdum rutrum
            massa. Integer ut lorem libero.
          </FAQDropdown>
        </Column>

        <Column>
          <FAQDropdown
            question={"When is a professional traffic permit needed?"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet ultrices felis. Pellentesque id imperdiet massa. Suspendisse
            imperdiet massa sit amet metus rutrum, a feugiat diam convallis.
            Vestibulum tellus nibh, lacinia sit amet magna id, interdum rutrum
            massa. Integer ut lorem libero.
          </FAQDropdown>
          <FAQDropdown question={"Where to look for a traffic permit?"}>
            Traffic permits are a requirement for conducting professional
            traffic.
          </FAQDropdown>
          <FAQDropdown
            question={
              "Are there differences between a traffic permit and a professional traffic permit?"
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet ultrices felis. Pellentesque id imperdiet massa. Suspendisse
            imperdiet massa sit amet metus rutrum, a feugiat diam convallis.
            Vestibulum tellus nibh, lacinia sit amet magna id, interdum rutrum
            massa. Integer ut lorem libero. Donec eget consequat ante. Praesent
            sed cursus lorem. Fusce iaculis urna a mattis laoreet. Maecenas ut
            cursus nibh. Maecenas a erat nibh. Proin tincidunt vel tortor sed
            scelerisque. Maecenas finibus vitae elit in porttitor.
          </FAQDropdown>
          <FAQDropdown
            question={
              "How much does a commercial traffic permit cost for goods?"
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet ultrices felis. Pellentesque id imperdiet massa.
          </FAQDropdown>
          <FAQDropdown question={"How to plug in for the traffic permit test?"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet ultrices felis. Pellentesque id imperdiet massa.
          </FAQDropdown>
        </Column>
      </Content>

      <Background />
    </Container>
  );
}

export default FAQSection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 80px;

  position: relative;
  padding-bottom: 100px;
`;

const ContentHeader = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  max-width: 470px;

  h1 {
    color: ${(props) => props.theme.colors.red};
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;

    margin: 65px 0;
  }

  p {
    font-size: 38px;
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.title};
    line-height: 1.5em;

    margin-bottom: 65px;
  }

  img {
    max-width: min(100%, 400px);
  }

  @media ${(props) => props.theme.devices.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    max-width: 100%;

    p {
      font-size: 48px;
      max-width: 550px;
    }

    img {
      max-width: 100%;
    }
  } ;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media ${(props) => props.theme.devices.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  } ;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Background = styled.div`
  position: absolute;
  z-index: -1;
  left: 30%;
  top: -100px;

  border-top-left-radius: 150px;

  width: 1000px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.rose};
`;
