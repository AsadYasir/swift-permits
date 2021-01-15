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
          <FAQDropdown question={"What is a professional traffic permit?"}>
            Traffic permits are a requirement for conducting professional
            traffic. Traffic permits are a requirement for conducting
            professional traffic. Traffic permits are a requirement for
            conducting professional traffic. Traffic permits are a requirement
            for conducting professional traffic. Traffic permits are a
            requirement for conducting professional traffic. Traffic permits are
            a requirement for conducting professional traffic. Traffic permits
            are a requirement for conducting professional traffic. Traffic
            permits are a requirement for conducting professional traffic.
            Traffic permits are a requirement for conducting professional
            traffic. Traffic permits are a requirement for conducting
            professional traffic.
          </FAQDropdown>
          <FAQDropdown question={"What is a professional traffic permit?"}>
            Traffic permits are a requirement for conducting professional
            traffic.
          </FAQDropdown>
          <FAQDropdown question={"What is a professional traffic permit?"}>
            Traffic permits are a requirement for conducting professional
            traffic.
          </FAQDropdown>
        </Column>

        <Column>
          <FAQDropdown question={"What is a professional traffic permit?"}>
            Traffic permits are a requirement for conducting professional
            traffic.
          </FAQDropdown>
          <FAQDropdown question={"What is a professional traffic permit?"}>
            Traffic permits are a requirement for conducting professional
            traffic.
          </FAQDropdown>
          <FAQDropdown question={"What is a professional traffic permit?"}>
            <p>
              Traffic permits are a requirement for conducting professional
              traffic.
            </p>
          </FAQDropdown>
          <FAQDropdown question={"What is a professional traffic permit?"}>
            Traffic permits are a requirement for conducting professional
            traffic.
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
  width: 100%;
  margin-top: 80px;
  padding-right: 60px;

  position: relative;
  padding-bottom: 400px;
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

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
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
  height: 600px;
  background-color: ${(props) => props.theme.colors.rose};
`;
