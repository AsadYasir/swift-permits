import React from "react";
import styled from "styled-components";
import HeroImg from "../assets/images/MainScene.png";

function HeroSection() {
  return (
    <section>
      <SceneImg src={HeroImg} alt="" />
    </section>
  );
}

export default HeroSection;

const SceneImg = styled.img`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100vw;

  z-index: -1;
`;
