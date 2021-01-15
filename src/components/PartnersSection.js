import React from "react";
import styled from "styled-components";

function PartnersSection() {
  return (
    <Container>
      <Header>
        <h1>Partners</h1>
        <p>Our Awesome Clients</p>
      </Header>

      <CardSlider>
        <Card first></Card>
        <Card second></Card>
        <Card third></Card>
      </CardSlider>
    </Container>
  );
}

export default PartnersSection;

const Container = styled.section`
  display: grid;
  grid-template-columns: 300px auto;
  width: 100%;

  margin-bottom: 800px;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.colors.red};
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;

    margin: 0 0 65px;
  }

  p {
    font-size: 48px;
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.title};
    max-width: 550px;
    line-height: 1.5em;

    margin-bottom: 65px;
  }
`;

const CardSlider = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 40px;

  position: relative;
`;

const Card = styled.div`
  background-color: white;
  box-shadow: rgba(238, 77, 71, 0.15) 0px 48px 100px 0px;
  border-radius: 10px;
  margin-left: 15px;

  height: 360px;
  width: 420px;

  opacity: ${(props) => (props.first ? 1 : props.second ? 0.5 : 0.3)};
`;
