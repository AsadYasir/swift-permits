import styled, { keyframes } from "styled-components";
import rightArrow from "../assets/images/RightArrow.svg";

const bounce = keyframes`
  0%, 100% {
    right: 10px;
  }
  50% {
    right: 25px;
  }
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.colors.red};
  color: white;
  padding: 20px ${(props) => (props.callToAction ? "80px 20px 24px" : "24px")};
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;

  letter-spacing: 1px;
  cursor: pointer;

  &::after {
    display: ${(props) => (props.callToAction ? "block" : "none")};
    content: "";
    position: absolute;
    width: 40px;
    height: 16px;

    animation: ${bounce} 1.3s ease-in-out infinite;

    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${rightArrow});
  }
`;
