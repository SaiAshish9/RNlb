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
import Btn from './btn';

const {width, height} = Dimensions.get('window');

const Cart = () => {
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
            paddingHorizontal: width * 0.1,
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
                YOUR CART
              </Text>
              <Text
                style={{
                  fontStyle: 'italic',
                  fontSize: 12,
                  color: '#ECDBFA',
                  marginLeft: 5,
                  opacity: 0.5,
                }}>
                (2 Items)
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#000',
              width: '100%',
              height: height * 0.15,
              borderRadius: 20,
              marginBottom: 15,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Image
              resizeMode="contain"
              source={require('../assets/thumbnail1.png')}
              style={{
                width: 127,
                // height: 127,
                position: 'relative',
                right: 30,
                alignSelf: 'center',
                justifyContent: 'center',
              }}
            />
            <View
              style={{
                alignSelf: 'center',
                right: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'Michroma-Regular',
                  fontSize: 20,
                  color: '#ECDBFA',
                }}>
                Alpha Fury
              </Text>
              <Text
                style={{
                  fontFamily: 'Michroma-Regular',
                  fontSize: 12,
                  color: '#ECDBFA',
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
                backgroundColor: '#000',
                width: '100%',
                height: height * 0.12,
                borderRadius: 20,
                marginVertical: 10,
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Image
                resizeMode="contain"
                source={require('../assets/thumbnail.png')}
                style={{
                  //   width: 127,
                  position: 'relative',
                  right: 30,
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}
              />
              <View
                style={{
                  alignSelf: 'center',
                  right: 30,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '72%',
                }}>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Bold',
                      fontSize: 14,
                      color: '#D2D7F9',
                      opacity: 0.87,
                    }}>
                    Alpha Fury
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Regular',
                      fontSize: 12,
                      color: '#D2D7F9',
                      opacity: 0.5,
                    }}>
                    KD 4,500
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 12,
                    color: '#D2D7F9',
                    opacity: 0.5,
                  }}>
                  KD 2,520
                </Text>
              </View>
            </View>
          ))}

          <View
            style={{
              backgroundColor: '#000',
              width: '100%',
              height: height * 0.12,
              borderRadius: 20,
              marginVertical: 10,
              display: 'flex',
              flexDirection: 'row',
              padding: 27,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{}}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 12,
                  color: '#D2D7F9',
                  opacity: 0.5,
                }}>
                Deliver to
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 14,
                  color: '#D2D7F9',
                  opacity: 0.87,
                }}>
                1295 Mateo Summit{' '}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
              }}
              onPress={() => {}}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 12,
                  color: '#DF2EDC',
                }}>
                Change
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#000',
              width: '100%',
            //   minHeight: height * 0.4,
              borderRadius: 10,
              marginVertical: 10,
            }}>
            <View
              style={{
                padding: 20,
                borderBottomColor: 'rgba(255,255,255,0.3)',
                borderBottomWidth: 0.3,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 12,
                  opacity: 0.8,
                }}>
                Package Details (4 Items)
              </Text>
            </View>

            <View
              style={{
                padding: 20,
                borderBottomColor: 'rgba(255,255,255,0.3)',
                borderBottomWidth: 0.3,
              }}>
              {[...Array(4).keys()].map((i, k) => (
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 8,
                  }}
                  key={k}>
                  <Text
                    style={{
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: 14,
                      fontFamily: 'Montserrat-Regular',
                    }}>
                    Alpha Fury
                  </Text>
                  <Text
                    style={{
                      color: 'rgba(255,255,255,0.3)',
                      fontSize: 12,
                      fontFamily: 'Montserrat-Regular',
                    }}>
                    KD 2,500
                  </Text>
                </View>
              ))}
            </View>

            <View style={{paddingHorizontal: 20}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 15,
                }}
                >
                <Text
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Total
                </Text>
                <Text
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  KD 10,000
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity onPress={() => {}}>
            <Btn text="PAY" x="-50" />
          </TouchableOpacity>

          <Text
            style={{
              marginTop: 20,
              textAlign: 'center',
              fontFamily: 'Montserrat-Regular',
              fontSize: 12,
              color: '#fff',
              opacity: 0.5,
            }}>
            Forgot to add something?
          </Text>

          <TouchableOpacity onPress={() => {}}>
            <Btn text="Continue Shopping" x="0" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Cart;
