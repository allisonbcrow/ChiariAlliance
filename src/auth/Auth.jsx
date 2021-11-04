import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";


class Auth extends Component {

        render() {
  return (
    <div>
        <Route exact path="/login">
          <Login updateToken={this.props.updateToken} />
        </Route>
        <Route exact path="/register">
          <Register updateToken={this.props.updateToken} />
        </Route>
    </div>
  );
};
    }

export default Auth;
