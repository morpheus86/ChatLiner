import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Header from '../sections/Header';
import Hero from '../sections/Hero'
import Menu from '../sections/Menu'
import { createStackNavigator } from 'react-navigation'

//withNavigation: pass navigation route into a react component;
class Home extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Header message='Press to Login' />
        <Hero />
        <Menu navigate={navigate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default Home;
