import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux'
import { creatingChannel, createNewName } from '../store/channelReducer'
import { createStackNavigator } from 'react-navigation'

class NewChannel extends Component {
  static navigationOptions = {
    header: null
  }
  constructor() {
    super();
    this.state = {
      newEntry: ''
    }
  }
  handleChange = (evt) => {
    this.setState({
      newEntry: this.props.newChannelEntry
    })
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.newChannel(this.props.newChannelEntry)
  }
  render() {

    return (
      <View stle={styles.container}>
        <View>
          <TextInput
            style={styles.inputs}
            onChangeText={this.handleChange}
            placeholder="type here"
          />
          <FormValidationMessage>{'This field is required'}</FormValidationMessage>
        </View>
        <TouchableHighlight onPress={this.handleSubmit} underlayColor='#31e981'>
          <Text style={styles.buttons}>Create New Channel</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapState = (state) => {
  return {
    newChannelEntry: state.newChannelEntry
  }
}

const mapDispatch = (dispatch) => ({
  newChannel: chan => dispatch(creatingChannel(chan))
})

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
export default connect(mapState, mapDispatch)(NewChannel);