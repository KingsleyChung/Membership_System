import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import BottomNavigationBar from '../components/BottomNavigationBar';
import HomePage from './HomePage';
import ActivityPage from './ActivityPage';
import ProfilePage from './ProfilePage';

export default class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  componentWillMount() {
    // if (!Meteor.user()) this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to='/signin'/>
    }
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/activities" component={ActivityPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
        <BottomNavigationBar />
      </div>
    );
  }
}