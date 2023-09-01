import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-weight: var(--font-weight-normal);
`;

const Titlebar = ({ title }) => {
  return (
    <>
      <Title>{title}</Title>
    </>
  );
};

export default Titlebar;
