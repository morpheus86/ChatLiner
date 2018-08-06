import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Screen, Title, Text, Divider, Button, Spinner } from 'react-native';

import Input from '../helper/Input';
import LoginButton from '../helper/LoginButton';
import { getUser } from '../store/userReducer';

const mapStateToProps = (state) => {
  console.log('STATE', state);

  return {
    getUser: state.userReducer.authorizing
  }
};

class SignUp extends Component {
  render() {
    return (
      <Screen style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Title>Who are you?</Title>
        <Divider />

        <Input placeholder="Your name here"
          submitAction={getUser}
          submitOnBlur
          noclear
          ref="username" />
        <Divider />
        <Divider />

        {this.props.authorizing ? <Spinner /> : <LoginButton />}
      </Screen>
    );
  }
}

export default connect(mapStateToProps)(SignUp);