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

function onClickHandler(path) {
    alert(path);
}

const Sidebar = () => {
  return (
    <SideNav>
      <SideNavItem onClick={() => onClickHandler("/")} path="/">
        Dashboard
      </SideNavItem>
      <SideNavItem onClick={() => onClickHandler("/addUser")} path="/addUser">
        All Users
      </SideNavItem>
      <SideNavItem onClick={() => onClickHandler("/allUser")} path="/allUser">
        Add New User
      </SideNavItem>
    </SideNav>
  );
};

export default Sidebar;
