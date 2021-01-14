import React from "react";
import styled from "styled-components";

import Img from "../assets/images/HowToApply.svg";

function ApplySection({ applyRef }) {
  return (
    <Container ref={applyRef}>
      <img src={Img} alt="" />

      <Content>
        <h1>How to Apply</h1>
        <p>
          When applying for a traffic permit, there are certain requirements
          that you must meet that are included in the examination: requirements
          for professional knowledge, solid establishment, good reputation and
          financial resources. Important to remember is to confirm your
          application for a traffic permit by the company's company signer or
          CEO.
        </p>
      </Content>
    </Container>
  );
}

export default ApplySection;

const Container = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;

  img {
    max-width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.colors.red};
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;

    margin: 65px 0;
  }

  p {
    font-size: 18px;
    font-weight: 300;
    max-width: 470px;
    line-height: 1.5em;

    margin-bottom: 65px;
  }
`;
