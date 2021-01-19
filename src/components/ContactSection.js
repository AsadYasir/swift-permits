import React from "react";
import styled from "styled-components";

import SmallerTruckImg from "../assets/images/smaller-truck.svg";
import DetailLineImg from "../assets/images/detail-line.svg";

function ContactSection() {
  return (
    <Container>
      <Background />
      <SmallerTruck src={SmallerTruckImg} />
      <DetailLine src={DetailLineImg} />
    </Container>
  );
}

export default ContactSection;

const Container = styled.section`
  width: 100%;
  min-height: 800px;
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  top: 100px;
  right: -15px;
  width: 100vw;
  height: calc(100% - 100px);
  background-color: ${(props) => props.theme.colors.blue};

  @media ${(props) => props.theme.devices.desktop} {
    right: 0;
    border-top-right-radius: 100px;
  }
`;

const SmallerTruck = styled.img`
  position: absolute;
  top: 0;
  left: -15px;

  @media ${(props) => props.theme.devices.desktop} {
    left: calc((1130px - 100vw) / 2);
  }
`;

const DetailLine = styled.img`
  position: absolute;
  top: 200px;
  left: -15px;

  @media ${(props) => props.theme.devices.desktop} {
    left: calc((1130px - 100vw) / 2);
  }
`;
