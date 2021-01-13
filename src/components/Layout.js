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
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  @media ${(props) => props.theme.devices.desktop} {
    width: 1130px;
  } ;
`;
