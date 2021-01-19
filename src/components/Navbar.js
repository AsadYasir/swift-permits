import React from "react";
import styled from "styled-components";

import { ReactComponent as LogoIcon } from "../assets/images/Logo.svg";
import { Button } from "./Button";

function Navbar({ aboutRef, applyRef, faqRef }) {
  return (
    <Container>
      <Logo>
        <LogoIcon />
        <h1>Traffico</h1>
      </Logo>

      <NavLinks>
        <li
          className="nav-item"
          onClick={() => {
            aboutRef.current.scrollIntoView();
          }}
        >
          About
        </li>
        <li
          className="nav-item"
          onClick={() => {
            applyRef.current.scrollIntoView();
          }}
        >
          How to
        </li>
        <li
          className="nav-item"
          onClick={() => {
            faqRef.current.scrollIntoView();
          }}
        >
          FAQ
        </li>
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
  } ;
`;

const NavLinks = styled.ul`
  display: none;
  align-items: center;
  list-style: none;

  li {
    text-transform: uppercase;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    color: white;
    letter-spacing: 1px;

    cursor: pointer;
    position: relative;

    &:not(:first-child) {
      margin-left: 30px;
    }

    &.nav-item::after {
      position: absolute;
      bottom: -5px;
      left: 0;
      content: "";
      width: 100%;
      height: 3px;
      background-color: ${(props) => props.theme.colors.red};
      opacity: 0;
      transition: 0.4s;
    }

    &.nav-item:hover::after {
      opacity: 1;
      bottom: -10px;
    }
  }
  @media ${(props) => props.theme.devices.tablet} {
    display: flex;

    li:not(:first-child) {
      margin-left: 40px;
    }
  }

  @media ${(props) => props.theme.devices.desktop} {
    li:not(:first-child) {
      margin-left: 100px;
    }
  }
`;
