import React from "react";
import styled from "styled-components";
import HeroImg from "../assets/images/MainScene.png";
import { Button } from "./Button";

function HeroSection() {
  return (
    <Container>
      <SceneImg src={HeroImg} alt="" />

      <h1>Your awesome traffic permit consultant.</h1>
      <Button callToAction>Get started</Button>
    </Container>
  );
}

export default HeroSection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 100px;
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: normal;
    color: white;
    line-height: 1em;

    width: 740px;

    margin-top: 90px;
    margin-bottom: 60px;
  }
`;

const SceneImg = styled.img`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100vw;

  z-index: -1;
`;
