import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SigninPage from './SigninPage';
import ContainerPage from './ContainerPage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <Route path="/" component={ContainerPage} />
            <Route path="/signin" component={SigninPage}/>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}