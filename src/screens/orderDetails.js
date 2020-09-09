import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import Btn from './btn';

const {height, width} = Dimensions.get('window');

const OrderDetails = () => {
  return (
    <ImageBackground
      style={{
        height,
        width,
        overflowX: 'hidden',
      }}
      source={require('../assets/plainBg.png')}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height,
          width,
          //   padding: width * 0.1,
        }}>
        <View
          style={{
            padding: width * 0.1,
            paddingRight: 20,
          }}>
          <View
            style={{
              display: 'flex',
              marginBottom: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => {}}>
              <Image
                resizeMode="contain"
                style={{width: 48, height: 48}}
                source={require('../assets/back.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 12,
                color: '#fff',
                fontStyle: 'italic',
                marginLeft: 10,
                fontFamily: 'Montserrat-Regular',
              }}>
              Order ID 2344552
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 24,
                marginBottom: 20,
                fontFamily: 'Michroma-Regular',
                color: '#ECDBFA',
              }}>
              Confirmed
            </Text>
            <Text
              style={{
                color: '#DF2EDC',
                fontSize: 16,
                fontFamily: 'Michroma-Regular',
                lineHeight: 24,
              }}>
              On the Way
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat-Regular',
                lineHeight: 14,
                color: '#ECDBFA',
                fontSize: 12,
                opacity: 0.5,
                marginTop: 5,
              }}>
              Will be delivered{' '}
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                }}>
                tomorrow, 06:00 PM
              </Text>
            </Text>
            <Text
              style={{
                fontFamily: 'Michroma-Regular',
                lineHeight: 14,
                color: '#ECDBFA',
                fontSize: 12,
                opacity: 0.24,
                marginTop: 20,
              }}>
              Delivered{' '}
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <Text
              style={{
                fontFamily: 'Michroma-Regular',
                fontSize: 20,
                lineHeight: 28,
                color: '#ECDBFA',
              }}>
              Alpha Fury
            </Text>
            <Text
              style={{
                fontFamily: 'Michroma-Regular',
                fontSize: 12,
                opacity: 0.5,
                lineHeight: 28,
                color: '#ECDBFA',
              }}>
              KD 4,500
            </Text>
          </View>

          {[...Array(3).keys()].map((i, k) => (
            <View
              key={k}
              style={{
                backgroundColor: '#000',
                width: '100%',
                height: height * 0.12,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
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
                }}>
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

          <View
            style={{
              backgroundColor: '#000',
              padding: 20,
              borderRadius: 10,
            }}>
            <View style={{marginVertical: 7}}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 12,
                  color: '#ECDBFA',
                  opacity: 0.5,
                }}>
                Name
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 14,
                  color: '#ECDBFA',
                }}>
                Johndoe
              </Text>
            </View>
            <View style={{marginVertical: 7}}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 12,
                  color: '#ECDBFA',
                  opacity: 0.5,
                }}>
                Shipping Address
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 14,
                  color: '#ECDBFA',
                }}>
                393 Kristoffer Freeway Apt. 485
              </Text>
            </View>

            <View style={{marginVertical: 7}}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 12,
                  color: '#ECDBFA',
                  opacity: 0.5,
                }}>
                Payment Method
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 14,
                  color: '#ECDBFA',
                }}>
                By Credit Card
              </Text>
            </View>

            <View style={{marginVertical: 7}}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 12,
                  color: '#ECDBFA',
                  opacity: 0.5,
                }}>
                Invoice sent to
              </Text>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 14,
                    color: '#ECDBFA',
                  }}>
                  johndoe@gmail.com
                </Text>
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 12,
                    color: '#DF2EDC',
                  }}>
                  Download
                </Text>
              </View>
            </View>

            <View style={{marginVertical: 7}}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 12,
                  color: '#ECDBFA',
                  opacity: 0.5,
                }}>
                Payment ID
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 14,
                  color: '#ECDBFA',
                }}>
                #45777hh
              </Text>
            </View>

            <View style={{marginVertical: 7}}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 12,
                  color: '#ECDBFA',
                  opacity: 0.5,
                }}>
                Date & Time
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 14,
                  color: '#ECDBFA',
                }}>
                29 Sep 2020
              </Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => {}}>
            <Btn text="Need any help?" x="15" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default OrderDetails;
