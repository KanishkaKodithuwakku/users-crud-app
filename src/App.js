import React from 'react'
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Layouts from './components/Layouts';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import UserForm from './components/UserForm';
import NotFound from './NotFound/NotFound';
import UsersList from './components/UsersList/UsersList';


function App() {
  return (
    <Router>
      <Layouts>
        <Switch>
          <Route
            exact
            path="/"
            component={Dashboard}
            key={window.location.pathname}
          />
          <Route
            exact
            path="/users"
            component={UsersList}
            key={window.location.pathname}
          />
          <Route
            path="/profile/:id"
            component={Profile}
            key={window.location.pathname}
          />
          <Route
            path="/create"
            component={UserForm}
            key={window.location.pathname}
          />
          <Route
            path="/edit/:id"
            component={UserForm}
            key={window.location.pathname}
          />
          <Route path="*" component={NotFound} key={window.location.pathname} />
        </Switch>
      </Layouts>
      <GlobalStyles />
    </Router>
  );
}

export default App;
