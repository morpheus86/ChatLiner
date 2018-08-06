import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { FormImput, FormValidationMessage } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation'
import Header from '../sections/Header'

class Contact extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Enter Message',
      name: 'Enter Name',
      email: 'Enter your Email'
    }
  }
  clearField = () => this.setState({
    name: '',
    msg: '',
    email: ''

  })
  sendMessage = () => {
    Alert.alert(this.state.name, this.state.msg)
    this.props.navigation.goBack()
  }
  render() {
    return (
      <View stle={styles.container}>
        <View>
          <Header message='Press To LogIn' />
          <Text style={styles.heading}>Contact Us</Text>
        </View>
        <View>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => this.setState({ name: text })}
            value={this.state.name}
          />
          <FormValidationMessage>{'This field is required'}</FormValidationMessage>
        </View>
        <View>
          <TextInput
            style={styles.multiInput}
            onChangeText={(text) => this.setState({ msg: text })}
            value={this.state.msg}
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <View>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
          />
          <FormValidationMessage>{'This field is required'}</FormValidationMessage>
        </View>

        <TouchableHighlight onPress={this.sendMessage} underlayColor='#31e981'>
          <Text style={styles.buttons}>Send Message</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '45%'
  },
  heading: {
    fontSize: 16,
    // flex: 1
  },
  inputs: {
    // flex: 1,
    width: '80%',
    padding: 10
  },
  multiInput: {
    // flex: 2,
    width: '90%',
    paddingTop: 20
  },
  buttons: {
    marginTop: 15,
    fontSize: 16
  }
})
export default Contact;
