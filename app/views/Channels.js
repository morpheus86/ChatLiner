import React, { Component } from 'react';
import { Text, View, Button } from 'react-native'
import { List } from 'react-native-elements'
import SingleChannel from './SingleChannel'
import { connect } from 'react-redux'
import { fetchChannels } from '../store/channelReducer';
import { createStackNavigator } from 'react-navigation'
import { NewChannel } from './NewChannel'

class Channels extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    await this.props.fetching()
  }
  onPress = () => {
    this.props.navigation.goBack()
  }
  render() {
    console.log('CHannel', this.props)
    return (
      <View>
        {
          this.props.channel.length ? (
            <View>
              <List>
                {
                  this.props.channel.map(channel => {
                    return <SingleChannel key={channel.id} channel={channel} />
                  })
                }
              </List>
              <Button
                onPress={() => this.props.navigation.navigate('NewChannelRT')}
                title="Add Private Channel"
                color="#841584"
              />
            </View>

          )
            : (
              <View style={{ paddingTop: 30 }}>
                <Text> LOADING </Text>
              </View>
            )
        }
      </View>
    );
  }
}

const mapState = (state) => {
  return {
    channel: state.channelReducer
  }
}

const mapDispatch = dispatch => {
  return {
    fetching: () => dispatch(fetchChannels())
  }
}
export default connect(mapState, mapDispatch)(Channels);