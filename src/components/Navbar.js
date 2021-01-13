import React from "react";
import styled from "styled-components";

import { ReactComponent as LogoIcon } from "../assets/images/Logo.svg";
import { Button } from "./Button";

function Navbar() {
  return (
    <Container>
      <Logo>
        <LogoIcon />
        <h1>Traffico</h1>
      </Logo>

      <NavLinks>
        <li>About</li>
        <li>How to</li>
        <li>FAQ</li>
        <li>
          <Button>Contact Us</Button>
        </li>
      </NavLinks>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 50px;
`;

const Logo = styled.div`
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
    font-weight: 300;
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
  } ;
`;

const NavLinks = styled.ul`
  display: none;
  align-items: center;
  list-style: none;

  li {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    color: white;
    letter-spacing: 1px;

    &:not(:first-child) {
      margin-left: 30px;
    }
  }

  @media ${(props) => props.theme.devices.desktop} {
    li:not(:first-child) {
      margin-left: 100px;
    }
  }
  @media ${(props) => props.theme.devices.tablet} {
    display: flex;

    li:not(:first-child) {
      margin-left: 40px;
    }
  }
`;
