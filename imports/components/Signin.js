import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Signin extends Component {
  
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    // if (!Meteor.user()) browserHistory.push('/signin');
  }

  handleSubmit(event) {
    event.preventDefault();
    
    var userName = ReactDOM.findDOMNode(this.refs.userName).children[1].value,
        password = ReactDOM.findDOMNode(this.refs.password).children[1].value;

    var handleSignin = (err) => {
      if (err) {
        console.log(err.reason);
      } else {
        console.log('登录成功');
      }
    }

    try {
      Meteor.loginWithPassword(userName, password, handleSignin.bind(this));
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <form className="col-sm-12 col-xs-12" onSubmit={this.handleSubmit.bind(this)} style={{paddingLeft: 15, paddingRight: 15}}>
        <TextField fullWidth={true} floatingLabelText="用户名" type="text" ref="userName"
          errorText={this.state.userNameError} 
        /><br />
        <TextField fullWidth={true} floatingLabelText="密码" type="password" ref="password"
          errorText={this.state.passwordError} 
        /><br />
        <div className="col-sm-12 col-xs-12" style={{display: "flex", justifyContent: "center", marginTop: 30}}>
          <RaisedButton label="登录" primary={true} type="submit" style={{marginRight: 30, backgroundColor: "#1fbcd3"}}/>
        </div>
      </form>
    );
  }
}