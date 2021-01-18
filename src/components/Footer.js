import React from "react";
import styled from "styled-components";

import Twitter from "../assets/images/twitter.svg";
import Instagram from "../assets/images/instagram.svg";
import Facebook from "../assets/images/facebook.svg";

function Footer() {
  return (
    <Container>
      <span>design by Slab Studios &#183; made by pklepa</span>

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
  width: 100%;
  /* min-height: 100px; */
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.bg};
  padding: 50px 0;

  span {
    font-weight: 300;
  }

  .social-icons {
    display: flex;
  }
`;

const SocialIconWrapper = styled.div`
  display: flex;

  height: 40px;
  width: 40px;
  padding: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.red};

  margin-left: 12px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialIcon = styled.img`
  width: 100%;
`;
