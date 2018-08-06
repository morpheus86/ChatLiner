import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Text } from 'react-native';
import { auth } from '../store/userReducer';

class LoginButton extends Component {
  onLogin = () => {
    this.props.dispatch((auth));
  }

  render() {
    return (
      <Button styleName="light" onPress={this.onLogin}>
        <Text>Start Chatting</Text>
      </Button>
    )
  }
}

export default connect()(LoginButton);