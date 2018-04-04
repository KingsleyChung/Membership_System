import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BottomNavigationBar from '../components/BottomNavigationBar';
import HomePage from './HomePage';
import ActivityPage from './ActivityPage';
import ProfilePage from './ProfilePage';

export default class ContainerPage extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/home" component={HomePage} />
          <Route path="/activities" component={ActivityPage} />
          <Route path="/profile" component={ProfilePage} />
          <BottomNavigationBar />
        </div>
      </Router>
    );
  }
}