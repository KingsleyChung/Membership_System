import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
export default class SigninPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'signin',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="登录" value="signin">
          <Signin />
        </Tab>
        <Tab label="注册" value="signup">
          <Signup />
        </Tab>
      </Tabs>
    )
  }
}