import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.red};
  color: white;
  padding: 20px 24px;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;

  letter-spacing: 1px;
  cursor: pointer;
`;
