import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  padding: 6px;
  margin-top: 6px;
`;

const Title = ({ title }) => {
  return <StyledH1>{title}</StyledH1>;
};

export default Title;
