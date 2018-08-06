import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native'

class Menu extends Component {
  onPress = () => {
    Alert.alert('You tapped me')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('ChannelsRT')}>
            <Text style={styles.buttonText}>Channels</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}>Private Channels</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}>Chat Room</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('ContactRT')}>
            <Text style={styles.buttonText}>Contact</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('SignUpRT')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#35605a',

  },
  buttonRow: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ffffff',
    borderBottomWidth: 1
  },
  buttonStyles: {
    backgroundColor: '#35605a',
    height: '50%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18
  }
})
export default Menu;
