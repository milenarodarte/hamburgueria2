import styled from "styled-components";

const Button = styled.button`
  border: none;
  width: 8.125rem;
  height: 3.75rem;
  padding: 0rem 1.25rem 0rem 1.25rem;
  border-radius: 0.5rem;
  background-color: #27ae60;
  color: #ffffff;
  font-size: 1rem;
  line-height: 120%;
  cursor: pointer;
  :hover {
    background-color: #93d7af;
    color: #fff;
  }
  :focus {
    background-color: #93d7af;
  }
`;

export default Button;
