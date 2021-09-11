import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  height: 45px;
  width: 100%;
  margin: 20px 0;
`;

export const Input = styled.input`
  width: 85%;
  height: 100%;
  border: 1px solid #ccc;
  font-size: 1.7rem;
  border-radius: 3px;
  padding-left: 15px;
   &:focus {
        outline: none;
    }
`;

export const ButtonInput = styled.button`
  width:60px;
  height: 100%;
  border: none;
  outline: none;
  background:#E3EFF9;
  color: #3F92B7;
  font-size: 2.2rem;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 5px;
`;