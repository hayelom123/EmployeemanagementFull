import styled from "styled-components";
export const TextFieldStyle = styled.input`
   width: 80%;
   display: block;
   /* margin: 20px; */
  background: rgba(255, 255, 255, 0.2);
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 35px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 16px;
  letter-spacing: 1px;
  /* color: #fff; */
  /* the next code not much neccessary */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;
export const ErrorSpan = styled.span`
   color: red;
   width: 100%;
`;
export const InputBox = styled.div`
        width: 100%;
        margin: 20px;
        /* padding:20px auto; */
        box-sizing: border-box;
        /* background-color: green; */
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        text-align: center;
`;
