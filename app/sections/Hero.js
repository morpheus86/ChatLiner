import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Hero = () => {
  return (
    <Image
      style={styles.heroImage}
    // source={require('./img/Scan 3.jpeg')}
    />
  )
}
const styles = StyleSheet.create({
  heroImage: {
    width: undefined,
    height: undefined,
    flex: 8
  }
})

export default Hero;