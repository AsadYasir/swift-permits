import React from "react";
import styled from "styled-components";

function Layout({ children }) {
  return (
    <Container>
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg};

  z-index: 1;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  z-index: 5;

  @media ${(props) => props.theme.devices.desktop} {
    width: 1130px;
    padding: 0;
  } ;
`;
