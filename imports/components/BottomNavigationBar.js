import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

export default class BottomNavigationBar extends Component {
  render() {
    return (
      <Paper zDepth={2} style={{width: "100%", height: 48, position: "fixed", bottom: 0}}>
        <div className="mdui-bottom-nav">
          <Link to="/home" className="mdui-ripple mdui-bottom-nav-active">
            <i className="fas fa-home" style={{fontSize: 20}} />
            <label>Home</label>
          </Link>
          <Link to="/activities" className="mdui-ripple">
            <i className="fas fa-trophy" style={{fontSize: 20}} />
            <label>Activity</label>
          </Link>
          <Link to="/profile" className="mdui-ripple">
            <i className="fas fa-user" style={{fontSize: 20}} />
            <label>Profile</label>
          </Link>
        </div>
      </Paper>
    )
  }
}