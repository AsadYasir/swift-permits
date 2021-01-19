import React from "react";
import styled from "styled-components";

import SmallerTruckImg from "../assets/images/smaller-truck.svg";
import DetailLineImg from "../assets/images/detail-line.svg";
import { Button } from "./Button";

function ContactSection() {
  return (
    <Container>
      <MainContent>
        <Note>
          We provide traffic management consultants so you get started quickly,
          contact us for a quote today!
        </Note>
        <Form>
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" placeholder="Joe Doe" />

          <Label htmlFor="email">E-mail address</Label>
          <Input type="email" name="email" placeholder="example@mail.com" />
          <Button callToAction>Get Started</Button>
        </Form>
      </MainContent>

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

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 400px 550px;
  width: 100%;
  padding-top: 60px;
  align-items: flex-end;
  justify-content: center;
`;

const Note = styled.div`
  display: flex;
  padding: 20px 40px;
  border-left: 10px solid ${(props) => props.theme.colors.red};
  border-radius: 5px;
  color: white;
  width: 100%;
  margin-bottom: 70px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 75px;

  z-index: 100;

  & > button {
    align-self: flex-start;
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

const Background = styled.div`
  position: absolute;
  top: 100px;
  right: -15px;
  width: 100vw;
  height: calc(100% - 100px);
  background-color: ${(props) => props.theme.colors.blue};

  z-index: -1;

  @media ${(props) => props.theme.devices.desktop} {
    right: 0;
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
