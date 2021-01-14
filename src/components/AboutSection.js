import React from "react";
import styled from "styled-components";

function AboutSection() {
  return <Container></Container>;
}

export default AboutSection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100px;
  background-color: aquamarine;

  margin-top: 350px;

  @media ${(props) => props.theme.devices.tablet} {
    margin-top: 550px;
  }
`;
