import styled from "styled-components";

export const StyledLabel = styled.label`
  color: #333;
  text-transform: uppercase;
  color: #11142d;
  font-size: 16px;
  font-weight: 400;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-top: 5px;
  &::placeholder {
    font-weight: 600;
    font-size: 14px;
    color: #11142d;
  }
`;

export const StyledMethod = styled.button`
  border-radius: 14px;
  border: 2px solid #f0f0f0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 50px;
  background-color: #fff;
  &:active {
    background-color: #f0f0f0;
  }
`;

export const PlaceOrder = styled.button`
  background-color: #6c5dd3;
  width: 100%;
  padding: 15px 20px;
  border: 1px solid #6c5dd3;
  border-radius: 14px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 20px;
`;
