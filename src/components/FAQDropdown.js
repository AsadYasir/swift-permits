import React, { useState } from "react";
import styled from "styled-components";

function FAQDropdown({ question, children }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Container onClick={() => setShowDropdown(!showDropdown)}>
      <QuestionWrapper>
        <h1>{question}</h1>
        <svg
          className={showDropdown && "open"}
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            id="vertical"
            x="9"
            y="0.162109"
            width="2"
            height="20"
            fill="#EE4D47"
          />
          <rect
            id="horizontal"
            x="20"
            y="9.16211"
            width="2"
            height="20"
            transform="rotate(90 20 9.16211)"
            fill="#EE4D47"
          />
        </svg>
      </QuestionWrapper>
      <AnswerWrapper className={showDropdown && "open"}>
        <p>{children}</p>
      </AnswerWrapper>
    </Container>
  );
}

export default FAQDropdown;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  margin-bottom: 10px;
  cursor: pointer;
`;

const QuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  z-index: 5;

  h1 {
    font-size: 18px;
    font-weight: 700;
  }

  svg {
    transform: rotateZ(0deg);
    transition: transform 400ms ease-out;

    &.open {
      transform: rotateZ(180deg);
      transition: transform 400ms ease-out;
      transform-origin: center;
    }

    #vertical {
      transform: rotateZ(0deg);
      transition: transform 300ms ease-out;
      transform-origin: center;
    }

    &.open #vertical {
      transform: rotateZ(90deg);
    }
  }
`;

const AnswerWrapper = styled.div`
  display: flex;
  width: 100%;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 10px;
  background-color: #fff7f5;

  top: 0;
  left: 0;
  overflow: hidden;

  padding: 0 25px;
  max-height: 0;

  transition: 0.4s ease-in;

  > p {
    transition: 0.4s linear;
    padding-top: -50px;
  }

  &.open {
    padding: 25px;
    max-height: 500px;

    > p {
      padding-top: 0px;
      transition: 0.4s linear;
    }
  }
`;
