import React, { useRef, useState } from "react";
import styled from "styled-components";

import RightArrow from "../assets/images/SliderRight.svg";
import LeftArrow from "../assets/images/SliderLeft.svg";

import useWindowDimensions from "../assets/utils/useWindowDimensions.js";

function PartnersSection() {
  const sliderRef = useRef(null);
  const [cardInDisplay, setCardInDisplay] = useState(0);
  const { width } = useWindowDimensions();

  const cards = [
    {
      author: "Isak Petersson",
      imgUrl: "https://randomuser.me/api/portraits/lego/0.jpg",
      message:
        "Yes, you will need to have the land owner sign the permit application as the Permittee, and you sign the permit as the Applicant or Agent for the Permittee.",
    },
    {
      author: "Simon Sandberg",
      imgUrl: "https://randomuser.me/api/portraits/lego/8.jpg",
      message:
        "From most barricade or traffic control companies located in the phone book. They employ certified Traffic Control Supervisors (TCS) who can generate and certify the traffic control plan.",
    },
    {
      author: "Joe Doe",
      imgUrl: "https://randomuser.me/api/portraits/lego/7.jpg",
      message:
        "An A-Line, or access restriction deed is a property right that has been obtained by CDOT for the sole purpose of prohibiting direct.",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Header>
          <h1>Partners</h1>
          <p>Our Awesome Clients</p>
        </Header>
        <Hider />
      </Wrapper>

      <Wrapper>
        <CardSlider ref={sliderRef}>
          {cards.map((card, index) => {
            return (
              <Card
                first={index === cardInDisplay}
                second={Math.abs(index - cardInDisplay) < 2}
                key={index}
              >
                <p>{card.message}</p>
                <div className="author">
                  <div
                    className="author-img"
                    style={{
                      backgroundImage: `url(${card.imgUrl})`,
                    }}
                  ></div>
                  <span>{card.author}</span>
                </div>
              </Card>
            );
          })}
        </CardSlider>

        <ControlsContainer>
          <img
            src={LeftArrow}
            alt="Left"
            className={cardInDisplay <= 0 ? "disabled" : ""}
            onClick={(e) => {
              if (cardInDisplay > 0) {
                sliderRef.current.style.transform = `translate3d(${
                  (cardInDisplay - 1) * -Math.min(415, width - 30)
                }px,0,0)`;
                setCardInDisplay(cardInDisplay - 1);
              }
            }}
          />
          <img
            src={RightArrow}
            alt="Right"
            className={cardInDisplay >= cards.length - 1 ? "disabled" : ""}
            onClick={(e) => {
              if (cardInDisplay >= 0 && cardInDisplay < cards.length - 1) {
                sliderRef.current.style.transform = `translate3d(${
                  (cardInDisplay + 1) * -Math.min(415, width - 30)
                }px,0,0)`;
                setCardInDisplay(cardInDisplay + 1);
              }
            }}
          />
        </ControlsContainer>
      </Wrapper>
    </Container>
  );
}

export default PartnersSection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 300px;
  margin-top: 185px;
  padding-bottom: 65px;

  @media ${(props) => props.theme.devices.tablet} {
    display: grid;
    grid-template-columns: 300px auto;
    width: 100%;
    margin-bottom: 150px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 200px;
  width: min(100%, 470px);

  display: flex;
  overflow: visible;

  .support-wrapper {
    position: relative;
    width: 100vw;
    height: 100%;
    background-color: red;

    display: flex;
  }

  @media ${(props) => props.theme.devices.tablet} {
    height: 400px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: min(470px, 100%);
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: 10;
  background-color: ${(props) => props.theme.colors.bg};

  h1 {
    color: ${(props) => props.theme.colors.red};
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;

    margin: 0 0 25px;
  }

  p {
    font-size: 38px;
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.title};
    max-width: 550px;
    line-height: 1.5em;

    margin-bottom: 30px;
  }

  @media (min-width: 410px) {
    h1 {
      margin: 0 0 65px;
    }
  }

  @media ${(props) => props.theme.devices.tablet} {
    p {
      font-size: 48px;
      margin-bottom: 65px;
    }
  }
`;

const Hider = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  right: 0;
  top: 0;

  z-index: 9;
  background-color: ${(props) => props.theme.colors.bg}; ;
`;

const CardSlider = styled.div`
  display: flex;
  width: 100%;
  height: 370px;
  padding: 0;
  transition: 0.4s;

  position: absolute;
  top: 0;
  left: 0;

  @media ${(props) => props.theme.devices.tablet} {
    padding: 0 15px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;

  background-color: white;
  box-shadow: rgba(238, 77, 71, 0.15) 0px 10px 10px 0px;
  border-radius: 10px;

  margin-right: 15px;
  padding: 60px 48px 40px;
  max-width: min(400px, calc(100vw - 45px));

  opacity: ${(props) => (props.first ? 1 : props.second ? 0.5 : 0.3)};
  transition: 0.4s;

  .author {
    display: flex;
    align-items: center;
    margin-top: 20px;

    .author-img {
      border-radius: 50%;
      background-color: grey;
      background-position: center;
      background-size: cover;
      width: 60px;
      height: 60px;
      margin-right: 15px;
    }

    span {
      font-size: 16px;
      font-weight: bold;
    }
  }

  @media ${(props) => props.theme.devices.tablet} {
    max-width: 400px;
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  bottom: -245px;
  left: min(135px, calc((100vw - 130px - 30px) / 2));

  img {
    width: 40px;
    cursor: pointer;

    &.disabled {
      opacity: 0.5;
    }
  }

  & img:last-child {
    margin-left: 50px;
  }

  @media ${(props) => props.theme.devices.tablet} {
    bottom: -70px;
    left: 175px;
  }
`;
