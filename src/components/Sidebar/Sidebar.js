import { useHistory } from "react-router-dom";
import styled from "styled-components";

export const SideNav = styled.ul`
  height: 100%;
  width: 180px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #3282b8;
  overflow-x: hidden;
  padding-top: 20px;
`;

export const SideNavItem = styled.li`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #ffffff;

  &:hover {
    color: #818181;
    cursor: pointer;
  }
`;


const Sidebar = () => {
  const history = useHistory();
  function onClickHandler(path) {
      history.push(`/${path}`);
  }
  return (
    <SideNav>
      <SideNavItem onClick={() => onClickHandler("")}>Dashboard</SideNavItem>

      <SideNavItem onClick={() => onClickHandler("users")}>Users</SideNavItem>

      <SideNavItem onClick={() => onClickHandler("create")}>
        Add New User
      </SideNavItem>
    </SideNav>
  );
};

export default Sidebar;
