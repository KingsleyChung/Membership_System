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
  
  componentDidMount() {
    this.updateSize();
    window.addEventListener('resize', this.updateSize.bind(this));
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.updateSize.bind(this));
  }

  updateSize() {
      try {
          this.setState({ width: window.innerWidth, height: window.innerHeight});
      } catch (ignore) {
      }
  }

  handleSubmit(event) {
    event.preventDefault();
    // var id = ReactDOM.findDOMNode(this.refs.adminId).children[1].value.trim();
    var pwd = ReactDOM.findDOMNode(this.refs.adminPwd).children[1].value.trim();
    var handleError = (err) => {
      if (err) {
        document.getElementById('error-hint').innerHTML = '账号/密码错误';
        console.log(err.reason);
      } else {
        console.log("登录成功！");
        browserHistory.push('/');
      } 
    }
    Meteor.loginWithPassword('tennis', pwd, handleError.bind(this));
  }

  clearInput() {
    // ReactDOM.findDOMNode(this.refs.adminId).children[1].value = '';
    ReactDOM.findDOMNode(this.refs.adminPwd).children[1].value = '';
    this.clearError();
  }

  clearError() {
    document.getElementById('error-hint').innerHTML = '';
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-md-3 col-sm-2 col-xs-0" />
        <div className="col-md-6 col-sm-8 col-xs-12" style={{height: this.state.height, display: "flex", alignItems: "center"}}>
          <div className="col-md-12 col-sm-12 col-xs-12">
            <Paper className="col-md-12 col-sm-12 col-xs-12" style={{paddingLeft: 30, paddingRight: 30, paddingBottom: 30, marginBottom: 100}}>
              <form onSubmit={this.handleSubmit.bind(this)}>
                {/* <TextField fullWidth={true} floatingLabelText="管理员账号" type="text" ref="adminId"/><br /> */}
                <TextField fullWidth={true} floatingLabelText="密码" type="password" ref="adminPwd" onChange={this.clearError.bind(this)}/><br />
                <div id="error-hint" style={{height: 10, fontSize: 10, marginTop: -5, marginBottom: 16, color: "red"}}></div>
                <div className="col-md-12 col-sm-12 col-xs-12" style={{display: "flex", justifyContent: "center"}}>
                  <RaisedButton label="确定" primary={true} type="submit" style={{marginRight: 30, backgroundColor: "#1fbcd3"}}/>
                  <RaisedButton label="清空" onClick={this.clearInput.bind(this)}/>
                </div>
              </form>
            </Paper>
          </div>
        </div>
        <div className="col-md-3 col-sm-2 col-xs-0" />
      </div>
    );
  }
}