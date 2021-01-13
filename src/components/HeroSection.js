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
    font-size: 50px;
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: normal;
    color: white;
    line-height: 1em;

    max-width: 600px;

    margin-top: 90px;
    margin-bottom: 60px;

    @media ${(props) => props.theme.devices.tablet} {
      font-size: 100px;
      font-family: ${(props) => props.theme.fonts.title};
      font-weight: normal;
      color: white;
      line-height: 1em;

      max-width: 740px;

      margin-top: 90px;
      margin-bottom: 60px;
    }
  }
`;

const SceneImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 110vh;

  z-index: -1;

  @media ${(props) => props.theme.devices.tablet} {
    left: -200px;
  } ;
`;

const AnimationsContainer = styled.div`
  position: relative;
  width: 100%;
  /* height: 550px; */
`;

const revealRight = (x) => keyframes`
  from {
    opacity: 0;
    right: ${x - 130}px;
  }
  to {
    opacity: 1;
    right: ${x}px;
  }
`;
const revealLeft = (x) => keyframes`
  from {
    opacity: 0;
    right: ${x + 130}px;
  }
  to {
    opacity: 1;
    right: ${x}px;
  }
`;

const DeliverMan = styled.img`
  position: absolute;
  display: none;

  @media ${(props) => props.theme.devices.tablet} {
    display: block;
    top: -85px;

    animation: ${revealLeft(230)} 1.5s ease;
    animation-fill-mode: forwards;
  }

  @media ${(props) => props.theme.devices.desktop} {
    display: block;
    top: -335px;

    animation: ${revealLeft(200)} 1.5s ease;
    animation-fill-mode: forwards;
  }
`;

const DeliverGirl = styled.img`
  position: absolute;
  display: none;

  @media ${(props) => props.theme.devices.tablet} {
    display: block;
    top: -85px;

    animation: ${revealRight(0)} 1.5s ease;
    animation-fill-mode: forwards;
  }

  @media ${(props) => props.theme.devices.desktop} {
    display: block;
    top: -335px;

    animation: ${revealRight(50)} 1.5s ease;
    animation-fill-mode: forwards;
  }
`;

const motorBounce = (y) => keyframes`
  0%, 100% {
    top: ${y}vh;
  }
  50% {
    top: calc(${y}vh + 5px);
  }
`;

const DeliverTruckUpper = styled.img`
  position: absolute;
  left: -60px;
  width: 400px;

  animation: ${motorBounce(10)} 1s ease-out infinite;

  @media ${(props) => props.theme.devices.tablet} {
    left: -400px;
    width: 800px;
  }
`;

const DeliverTruckLower = styled.img`
  position: absolute;
  left: -73px;
  top: calc(10vh + 100px);
  width: 400px;

  @media ${(props) => props.theme.devices.tablet} {
    left: -430px;
    width: 800px;
    top: calc(10vh + 200px);
  }
`;
