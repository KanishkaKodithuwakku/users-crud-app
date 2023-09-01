import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserForm from "./components/UserForm";
import Home from './components/Home';
import Notfound from "./components/NotFound";
import Users from './components/Users';
import Profile from './components/Profile';



const Wrapper = styled.div`
  max-width: 600px;
  margin: 20px auto;
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between; // Evenly spaces the links
  padding: 10px 0;
  background-color: #f5f5f5;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  margin: 0 10px; // Adds some spacing between the links
  padding: 5px 10px;
  border-radius: 4px;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e0e0e0;
    color: #555;
  }

  &:active {
    background-color: #ccc;
    color: #555;
  }
`;


function App() {
  return (
    <Router>
      <Wrapper>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/users">Users</StyledLink>
          <StyledLink to="/create">Add New User</StyledLink>
        </StyledNav>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/create" component={UserForm} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="*" component={Notfound} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
