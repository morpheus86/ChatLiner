import React from 'react';
import { View } from 'react-native'
import { ListItem } from 'react-native-elements'


const SingleChannel = (props) => {
  return (
    <View>
      <ListItem
        id={props.channel.id}
        title={props.channel.name}
        // leftAvatar=={{ source: {uri: props.channel.image}}}
        roundAvatar
      />
    </View>
  );
}

export default SingleChannel;
