import React, {useState} from 'react';
import {
  ImageBackground,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import Circle from '../components/gradientCircle';

const {width, height} = Dimensions.get('window');

const Orders = () => {
  const [selected, setSelected] = useState(0);

  return (
    <ImageBackground
      source={require('../assets/dottedBackground.png')}
      style={{
        width,
        height,
        overflowX: 'hidden',
      }}>
      <ScrollView
        style={{
          width,
          minHeight: height,
          paddingHorizontal: width * 0.1,
          //   paddingVertical: height * 0.1,
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
        <Text
          style={{
            fontFamily: 'Michroma-Regular',
            fontSize: 20,
            lineHeight: 28,
            color: '#ECDBFA',
          }}>
          My Orders
        </Text>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            marginVertical: 20,
          }}>
          <TouchableOpacity
            style={{marginRight: 20}}
            onPress={() => {
              setSelected(0);
            }}>
            {selected === 0 && (
              <View style={{position: 'absolute', top: 0}}>
                <Circle />
              </View>
            )}

            <Text
              style={{
                fontSize: 14,
                color: '#ECDBFA',
                opacity: selected === 0 ? 1 : 0.4,
                marginLeft: 10,
                fontFamily: 'Montserrat-Bold',
              }}>
              Active
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected(1);
            }}>
            {selected === 1 && (
              <View style={{position: 'absolute', top: 0}}>
                <Circle />
              </View>
            )}
            <Text
              style={{
                fontSize: 14,
                color: '#ECDBFA',
                opacity: selected === 1 ? 1 : 0.4,
                marginLeft: 10,
                fontFamily: 'Montserrat-Bold',
              }}>
              Past
            </Text>
          </TouchableOpacity>
        </View>

        {[...Array(3).keys()].map((i, k) => (
          <View
            key={k}
            style={{
              width: width * 0.8,
              height: height * 0.2,
              backgroundColor: '#000',
              borderRadius: 10,
              marginVertical: 10,
              padding: 20,
              justifyContent: 'space-between',
            }}>
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#ECDBFA',
                    fontFamily: 'Michroma-Regular',
                    fontSize: 16,
                    lineHeight: 20,
                  }}>
                  2344552
                </Text>
                <Text
                  style={{
                    color: '#ECDBFA',
                    fontFamily: 'Michroma-Regular',
                    fontSize: 16,
                    lineHeight: 20,
                  }}>
                  KD 4,500
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#ECDBFA',
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 12,
                    opacity: 0.5,
                    lineHeight: 20,
                  }}>
                  Order ID
                </Text>
                <Text
                  style={{
                    color: '#ECDBFA',
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 12,
                    opacity: 0.5,
                    lineHeight: 20,
                  }}>
                  4 Items
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: '#ECDBFA',
                fontFamily: 'Montserrat-Regular',
                fontSize: 12,
                opacity: 0.5,
                lineHeight: 20,
              }}>
              Will be delivered in 3-4 days
            </Text>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default Orders;
