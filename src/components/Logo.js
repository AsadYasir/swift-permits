import styled from "styled-components";

import React from "react";
import { ReactComponent as LogoIcon } from "../assets/images/Logo.svg";

function Logo() {
  return (
    <Container>
      <LogoIcon />
      <h1>Traffico</h1>
    </Container>
  );
}

export default Logo;

const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 30px;
    margin-right: 18px;
  }

  h1 {
    color: white;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 500;
    font-size: 24px;
  }

  @media ${(props) => props.theme.devices.tablet} {
    h1 {
      font-size: 32px;
    }

    svg {
      width: 50px;
      margin-right: 38px;
    }
  }
`;
