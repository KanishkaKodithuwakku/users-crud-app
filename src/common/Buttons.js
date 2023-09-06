import styled from "styled-components";


export const Button = styled.button`
  padding: 6px 8px;
  border: 2px solid #413c69;

  &:hover{
    cursor: pointer;
  }
`;

export const ButtonDefault = styled(Button)`
  background-color: #FFF;
  color: #FFF;
`;

export const ButtonPrimary = styled(Button)`
  background-color: #4a47a3;
  color: #FFF;
`;

export const ButtonWarning = styled(Button)`
  background-color: #f0a500;
  color: #fff;
`;

export const ButtonDanger = styled(Button)`
  background-color: #f05454;
  color: #fff;
`;
