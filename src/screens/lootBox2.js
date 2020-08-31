import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  View,
  Text,
} from 'react-native';
import Btn from './btn';

const {width, height} = Dimensions.get('window');

const LootBox2 = () => {
  return (
    <ImageBackground
      source={require('../assets/plainBg.png')}
      style={{
        width,
        height,
        overflowX: 'hidden',
      }}>
      <Image
        resizeMode="contain"
        style={{position: 'absolute', right: 0, top: height * 0.2}}
        source={require('../assets/ic_circle.png')}
      />
      <ScrollView
        style={{
          width,
          minHeight: height,
          paddingLeft: width * 0.09,
          paddingVertical: width * 0.05,
        }}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            resizeMode="contain"
            style={{
              width: 48,
            }}
            source={require('../assets/back.png')}
          />
        </TouchableOpacity>
        <Image
          source={require('../assets/thumbnail1.png')}
          resizeMode="cover"
          style={{
            // width:width*0.4,
            // alignSelf: 'center',
            height: height * 0.27,
          }}
        />
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginVertical: 20,
          }}>
          <View>
            <Text
              style={{
                fontSize: 20,
                lineHeight: 28,
                color: '#ECDBFA',
                fontFamily: 'Michroma-Regular',
              }}>
              Alpha Fury
            </Text>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 28,
                color: '#D2D7F9',
                fontFamily: 'Michroma-Regular',
                opacity: 0.5,
              }}>
              KD 4,500
            </Text>
          </View>
        </View>

        {[...Array(3).keys()].map((i, k) => (
          <View
            key={k}
            style={{
              height: height * 0.1,
              width: '100%',
              backgroundColor: '#000',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              marginVertical: 10,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Image
              resizeMode="contain"
              style={{width: 29, position: 'absolute', right: 0, bottom: 0}}
              source={require('../assets/ic_expand1.png')}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat-BoldItalic',
                color: '#ECDBFA',
              }}>
              CPU
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#D2D7F9',
                opacity: 0.5,
                fontFamily: 'Montserrat-Italic',
              }}>
              Intel i7 6469k
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#D2D7F9',
                opacity: 0.5,
                fontFamily: 'Montserrat-Italic',
              }}>
              KD 2,500
            </Text>
          </View>
        ))}
        <TouchableOpacity
          style={{marginBottom: 20, marginRight: 10}}
          onPress={() => {}}>
          <Btn text=" BUILD YOUR PC"></Btn>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default LootBox2;
