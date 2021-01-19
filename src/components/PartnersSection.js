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
        <Card first>
          <p>
            Yes, you will need to have the land owner sign the permit
            application as the Permittee, and you sign the permit as the
            Applicant or Agent for the Permittee.
          </p>
          <div className="author">
            <div
              className="author-img"
              style={{
                backgroundImage:
                  "url(https://randomuser.me/api/portraits/lego/0.jpg)",
              }}
            ></div>
            <span>Isak Petersson</span>
          </div>
        </Card>
        <Card second>
          <p>
            From most barricade or traffic control companies located in the
            phone book. They employ certified Traffic Control Supervisors (TCS)
            who can generate and certify the traffic control plan.
          </p>
          <div className="author">
            <div
              className="author-img"
              style={{
                backgroundImage:
                  "url(https://randomuser.me/api/portraits/lego/5.jpg)",
              }}
            ></div>
            <span>Simon Sandberg</span>
          </div>
        </Card>
        <Card third>
          <p>
            An A-Line, or access restriction deed is a property right that has
            been obtained by CDOT for the sole purpose of prohibiting direct
          </p>
          <div className="author">
            <div
              className="author-img"
              style={{
                backgroundImage:
                  "url(https://randomuser.me/api/portraits/lego/7.jpg)",
              }}
            ></div>
            <span>Joe Doe</span>
          </div>
        </Card>
      </CardSlider>
    </Container>
  );
}

export default PartnersSection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
  margin-top: 120px;
  padding-top: 65px;

  @media ${(props) => props.theme.devices.tablet} {
    display: grid;
    grid-template-columns: 300px auto;
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: min(470px, 100%);

  h1 {
    color: ${(props) => props.theme.colors.red};
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;

    margin: 0 0 65px;
  }

  p {
    font-size: 38px;
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.title};
    max-width: 550px;
    line-height: 1.5em;

    margin-bottom: 65px;
  }

  @media ${(props) => props.theme.devices.tablet} {
    p {
      font-size: 48px;
    }
  } ;
`;

const CardSlider = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;

  position: relative;

  @media ${(props) => props.theme.devices.tablet} {
    padding: 0 40px;
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
  max-width: min(400px, calc(100vw - 50px));

  opacity: ${(props) => (props.first ? 1 : props.second ? 0.5 : 0.3)};

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
  } ;
`;
