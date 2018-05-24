import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SigninPage from './SigninPage';
import Container from './Container';
import ActivityDetail from './ActivityDetail';
import ActivityEdit from './ActivityEdit';

export default class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <Switch>
            <Route path="/signin" component={SigninPage}/>
            <Route path="/activityedit/:id" component={ActivityEdit}/>
            <Route path="/activity/:id" component={ActivityDetail}/>
            <Route path="/" component={Container} />
          </Switch>
        </MuiThemeProvider>
      </Router>
    );
  }
}