import React from 'react';
import Home from './app/views/Home'
import Contact from './app/views/Contact'
import { createStackNavigator } from 'react-navigation'
import Channels from './app/views/Channels'
import store from './app/store'
import { Provider } from 'react-redux'
import NewChannel from './app/views/NewChannel'
import SignUp from './app/views/SignUp'

const MyRoutes = createStackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  ChannelsRT: {
    screen: Channels
  },
  NewChannelRT: {
    screen: NewChannel
  },
  SignUpRT: {
    screen: SignUp
  }
},
  //how to specify which component to launch first inside the app.
  {
    initialRouteName: 'HomeRT'
  }
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MyRoutes />
      </Provider>
    );
  }
}


