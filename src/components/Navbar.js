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

  svg {
    margin-right: 38px;
  }

  h1 {
    font-family: ${(props) => props.theme.fonts.title};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  li {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;

    &:not(:first-child) {
      margin-left: 100px;
    }
  }
`;
