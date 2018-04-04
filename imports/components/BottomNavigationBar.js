import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

export default class TempNavigation extends Component {
  render() {
    return (
      <Paper zDepth={1} style={{width: "100%", height: 48, position: "fixed", bottom: 0}}>
        <div className="mdui-bottom-nav">
          <Link to="/home" className="mdui-ripple mdui-bottom-nav-active">
            <i className="fas fa-home" style={{fontSize: 20}} />
            <label>Recents</label>
          </Link>
          <Link to="/activities" className="mdui-ripple">
            <i className="fas fa-trophy" style={{fontSize: 20}} />
            <label>Favorites</label>
          </Link>
          <Link to="/profile" className="mdui-ripple">
            <i className="fas fa-user" style={{fontSize: 20}} />
            <label>Nearby</label>
          </Link>
        </div>
      </Paper>
    )
  }
}