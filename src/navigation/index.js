import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../screens/login";
import Profile from "../screens/profile";
import Home from "../screens";
import { connect } from "react-redux";
function indexNav({ token }) {
  console.log("authStorage", token);
  return (
    <Router>
      <Switch>
        
        {token ? (
          <Route path="/profile">
            <Profile />
          </Route>
        ) : (
          <Route path="/login">
            <Login />
          </Route>
        )}

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
const mapStateToProps = ({ authStorage }) => {
  return {
    token: authStorage.token,
  };
};

export default connect(mapStateToProps)(indexNav);
