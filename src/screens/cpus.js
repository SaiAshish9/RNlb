import React from 'react';
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  Text,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Items = () => {
  return (
    <ImageBackground
      source={require('../assets/plainBg.png')}
      style={{
        width,
        height,
        overflowX: 'hidden',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width,
            paddingVertical: width * 0.05,
            paddingHorizontal: width * 0.08,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  resizeMode="contain"
                  style={{width: 48}}
                  source={require('../assets/back.png')}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontStyle: 'italic',
                  fontSize: 12,
                  color: '#ECDBFA',
                  marginLeft: 10,
                }}>
                CPU 'S
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={require('../assets/ic_search.png')}
                  resizeMode="contain"
                  style={{width: 40}}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={require('../assets/ic_filter.png')}
                  resizeMode="contain"
                  style={{width: 40}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            {[...Array(8).keys()].map((i, k) => (
              <View key={k}>
                <TouchableOpacity
                  onPress={() => {
                    console.log(i);
                  }}>
                  <ImageBackground
                    source={require('../assets/ic_card_b0.png')}
                    resizeMode="contain"
                    style={{
                      height: 170,
                      display: 'flex',
                      //   paddingLeft: 20,
                      paddingTop: 20,
                      width: width * 0.36,
                      marginVertical: i.image ? 20 : 10,
                      textAlign: 'center',
                    }}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/thumbnail1.png')}
                      style={{
                        width: 108,
                        height: 81,
                        position: 'absolute',
                        top: -24,
                        left: '14%',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#D2D7F9',
                        opacity: 0.87,
                        textAlign: 'center',
                        marginTop: 60,
                        fontFamily: 'Montserrat-Bold',
                      }}>
                      i7 6369K
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Montserrat-Regular',
                        color: '#D2D7F9',
                        opacity: 0.5,
                        fontSize: 14,
                        textAlign: 'center',
                      }}>
                      Intel
                    </Text>

                    <Text
                      style={{
                        color: '#D2D7F9',
                        opacity: 0.7,
                        fontSize: 12,
                        textAlign: 'center',
                        fontFamily: 'Montserrat-Regular',
                      }}>
                      KD 2,200
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Items;
