import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

export default class ProfilePage extends Component {

  componentWillMount() {
    Meteor.loginWithPassword('Kingsley', '123123', () => {
      console.log('login');
    });
  }

  render() {
    return (
      <div className="container-fluid" style={{padding: 15}}>
        {Meteor.user() &&
          <Paper className="col-sm-12 col-xs-12" zDepth={2} style={{borderRadius: 4, padding: 15}}>
            <div className="col-sm-12 col-xs-12" style={{display: "flex", justifyContent: "center"}}><Avatar src="images/RF.png" style={{width: 80, height: 80}}/></div>
            <div className="col-sm-12 col-xs-12" style={{textAlign: "center", fontSize: 30, marginTop: 12}}>{Meteor.user().username}</div>
          </Paper>
        }
      </div>
    )
  }
}