import React from "react";
import styled from "styled-components";

import Twitter from "../assets/images/twitter.svg";
import Instagram from "../assets/images/instagram.svg";
import Facebook from "../assets/images/facebook.svg";

function Footer() {
  return (
    <Container>
      <span>
        design by <a href="http://slabdsgn.com/">Slab Studios</a> &#183; made by{" "}
        <a href="https://github.com/pklepa">pklepa</a>
      </span>

      <div className="social-icons">
        <SocialIconWrapper>
          <SocialIcon src={Twitter} />
        </SocialIconWrapper>

        <SocialIconWrapper>
          <SocialIcon src={Facebook} />
        </SocialIconWrapper>

        <SocialIconWrapper>
          <SocialIcon src={Instagram} />
        </SocialIconWrapper>
      </div>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.bg};
  padding: 50px 0;

  span {
    font-weight: 300;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.red};
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .social-icons {
    display: flex;
    margin-top: 12px;

    > div:not(:first-child) {
      margin-left: 20px;
    }
  }

  @media ${(props) => props.theme.devices.mobile} {
    flex-direction: row;

    .social-icons {
      margin: 0;
    }
  } ;
`;

const SocialIconWrapper = styled.div`
  display: flex;

  height: 40px;
  width: 40px;
  padding: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.red};

  transition: 0.3s;

  &:hover {
    transform: scale(1.4);
  }
`;

const SocialIcon = styled.img`
  width: 100%;
`;
