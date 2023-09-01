import { useHistory,Link } from "react-router-dom";
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
  padding: 5px;
`;

export const SideNavItem = styled.li`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 15px;
  color: #ffffff;
  font-weight: var(--font-weight-normal);
  border-bottom: 1px solid #2c74b3;

  &:hover {
    color: #f3fde8;
    cursor: pointer;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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

      <Link to="/users">Users</Link>

      <SideNavItem onClick={() => onClickHandler("create")}>
        Add New User
      </SideNavItem>
    </SideNav>
  );
};

export default Sidebar;
