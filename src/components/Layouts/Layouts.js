import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";

export const MainWrapper = styled.div`
  margin-left: 180px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
`;


const Layouts = ({children}) => {
  return (
    <div>
     <Sidebar/>

      <MainWrapper>{children}</MainWrapper>
    </div>
  );
};

export default Layouts;
