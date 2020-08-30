import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Package = () => {
  return (
    <ImageBackground
      source={require('../assets/plainBg.png')}
      style={{
        width,
        height,
        overflowX: 'hidden',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
          
      </ScrollView>
    </ImageBackground>
  );
};

export default Package;
