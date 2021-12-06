
import styled from "styled-components";

export const Button = styled.button`
 width: 120px;
 height: 50px;
  border:2px solid #fff;
  font-size: 1.3em;
  text-transform: capitalize;
  border-radius: 10px;
  outline: none;
  transition: 0.5s;
  &:hover{
      border: 2px solid palevioletred;
  }
`;
 /* background-color: ${props=>props.bgColor}; */