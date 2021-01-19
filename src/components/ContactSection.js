import React from "react";
import styled from "styled-components";

import SmallerTruckImg from "../assets/images/smaller-truck.svg";
import DetailLineImg from "../assets/images/detail-line.svg";
import { Button } from "./Button";
import Logo from "./Logo";

function ContactSection({ aboutRef, applyRef, faqRef, contactRef }) {
  return (
    <Container ref={contactRef}>
      <MainContent>
        <Note>
          We provide traffic management consultants so you get started quickly,
          contact us for a quote today!
        </Note>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" placeholder="Joe Doe" required />

          <Label htmlFor="email">E-mail address</Label>
          <Input
            type="email"
            name="email"
            placeholder="example@mail.com"
            required
          />
          <Button callToAction>Get Started</Button>
        </Form>
      </MainContent>

      <Navigation>
        <Logo />
        <NavItems>
          <NavItem
            onClick={() => {
              aboutRef.current.scrollIntoView();
            }}
          >
            About
          </NavItem>
          <NavItem
            onClick={() => {
              applyRef.current.scrollIntoView();
            }}
          >
            How To
          </NavItem>
          <NavItem
            onClick={() => {
              faqRef.current.scrollIntoView();
            }}
          >
            FAQ
          </NavItem>
        </NavItems>
      </Navigation>

      <Background />
      <SmallerTruck src={SmallerTruckImg} />
      <DetailLine src={DetailLineImg} />
    </Container>
  );
}

export default ContactSection;

const Container = styled.section`
  width: 100%;
  position: relative;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 270px;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.devices.desktop} {
    display: grid;
    grid-template-columns: 400px 550px;
    padding-top: 60px;
    align-items: flex-end;
    grid-gap: 40px;
  }
`;

const Note = styled.div`
  display: flex;
  padding: 20px 0 20px 40px;
  border-left: 10px solid ${(props) => props.theme.colors.red};
  border-radius: 5px;
  color: white;
  width: min(100%, 550px);
  margin-bottom: 70px;

  @media ${(props) => props.theme.devices.desktop} {
    width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: min(100%, 550px);
  background-color: white;
  border-radius: 10px;
  padding: 60px 30px;

  z-index: 100;

  & > button {
    align-self: flex-start;
  }

  @media ${(props) => props.theme.devices.desktop} {
    width: 100%;
  }

  @media ${(props) => props.theme.devices.mobile} {
    padding: 75px;
  }
`;

const Input = styled.input`
  padding: 25px 40px;
  border: 1px solid ${(props) => props.theme.colors.red};
  border-radius: 5px;
  font-size: 18px;
  transition: 0.3s;

  margin-bottom: 50px;

  &:focus,
  :active {
    border-width: 3px;
    padding: 23px 38px;
    box-shadow: rgba(238, 77, 71, 0.2) 0px 20px 40px 0px;
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.red};
    font-weight: 300;
  }
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 18px;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;

  @media ${(props) => props.theme.devices.mobile} {
    flex-direction: row;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-top: 20px;

  & li:not(:first-child) {
    margin-left: 30px;
  }

  @media ${(props) => props.theme.devices.mobile} {
    margin-top: 0;
  }
`;

const NavItem = styled.li`
  color: white;
  font-size: 18px;
  font-weight: 300;
  text-transform: uppercase;

  cursor: pointer;
  position: relative;

  &::after {
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

  &:hover::after {
    opacity: 1;
    bottom: -10px;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 100px;
  right: -15px;
  width: 100vw;
  height: calc(100% - 100px);
  background-color: ${(props) => props.theme.colors.blue};

  z-index: -1;

  @media ${(props) => props.theme.devices.desktop} {
    right: -30px;
    border-top-right-radius: 100px;
  }
`;

const SmallerTruck = styled.img`
  position: absolute;
  top: 0;
  left: -15px;

  z-index: -1;

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
