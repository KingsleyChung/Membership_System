import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0
    };
  }
  // componentWillMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }
  // handleScroll = () => this.setState({scrollTop: $(window).scrollTop()});
  // scrollToTop() {
  //   $(window).animate({scrollTop: 0}, 1000);
  // }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          {this.props.children}
          {/* {this.state.scrollTop > 100 && <Button style={styles.backToTopButton}><a href="#" onClick={this.scrollToTop}>↑</a></Button>} */}
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  backToTopButton: {
    position: "fixed",
    right: 30,
    bottom: 30,
  }
}