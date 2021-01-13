import React from "react";
import styled, { keyframes } from "styled-components";

import { Button } from "./Button";

import HeroImg from "../assets/images/MainScene.png";
import DeliverManImg from "../assets/images/hero-deliver-man.svg";
import DeliverGirlImg from "../assets/images/hero-deliver-girl.svg";
import UpperTruckImg from "../assets/images/truck-upper.svg";
import LowerTruckImg from "../assets/images/truck-lower.svg";

function HeroSection() {
  return (
    <Container>
      <SceneImg src={HeroImg} alt="" />

      <h1>Your awesome traffic permit consultant.</h1>
      <Button callToAction>Get started</Button>

      <AnimationsContainer>
        <DeliverGirl src={DeliverGirlImg} />
        <DeliverMan src={DeliverManImg} />

        <DeliverTruckLower src={LowerTruckImg} />
        <DeliverTruckUpper src={UpperTruckImg} />
      </AnimationsContainer>
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

const AnimationsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
`;

const revealRight = keyframes`
  from {
    opacity: 0;
    right: 0px;
  }
  to {
    opacity: 1;
    right: 180px;
  }
`;
const revealLeft = keyframes`
  from {
    opacity: 0;
    right: 480px;
  }
  to {
    opacity: 1;
    right: 350px;
  }
`;

const DeliverMan = styled.img`
  position: absolute;
  right: 350px;
  top: -185px;
  width: 200px;

  animation: ${revealLeft} 1.5s ease;
  animation-fill-mode: forwards;
`;

const DeliverGirl = styled.img`
  position: absolute;
  top: -185px;
  width: 200px;

  animation: ${revealRight} 1.5s ease;
  animation-fill-mode: forwards;
`;

const motorBounce = keyframes`
  0%, 100% {
  top: 100px;
  }
  50% {
  top: 105px;
  }
`;

const DeliverTruckUpper = styled.img`
  position: absolute;
  left: -400px;
  top: 100px;

  animation: ${motorBounce} 1s ease-out infinite;
`;

const DeliverTruckLower = styled.img`
  position: absolute;
  left: -400px;
  top: 300px;
`;
