import React, {useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Context as AuthContext} from '../api/contexts/authContext';
import LanguageCard from '../svgs/cardLang';

const {height, width} = Dimensions.get('window');

const Language = ({navigation}) => {
  const {state, checkUser, setLanguage} = useContext(AuthContext);

  const data = [
    {
      title: 'Arabic',
      image: require('../assets/arabicFlag.png'),
    },
    {
      title: 'English',
      image: require('../assets/englishFlag.png'),
    },
  ];

  return (
    <LinearGradient
      colors={['#2A2D39', '#261D2A']}
      style={{
        width: width,
        minHeight: height,
        overflowX: 'hidden',
        display: 'flex',
        alignItems: 'center',
        // paddingLeft: width * 0.08,
        justifyContent: 'center',
      }}>
      <SafeAreaView>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                lineHeight: 28,
                fontSize: 20,
                color: '#ECDBFA',
                fontFamily: 'Michroma-Regular',
              }}>
              Choose your language
            </Text>

            {data.map((i, k) => (
              <TouchableOpacity
                key={k}
                style={{
                  marginTop: 30,
                }}
                onPress={() => {
                  setLanguage(i.title);
                  {
                    state.token
                      ? navigation.replace('home')
                      : navigation.replace('auth', {
                          screen: 'signin',
                        });
                  }
                }}>
                <View
                  style={{
                    position: 'absolute',
                    ...StyleSheet.absoluteFillObject,
                  }}>
                  <LanguageCard />
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    display: 'flex',
                    marginTop: 10,
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 72,
                    }}
                    source={i.image}
                  />
                  <Text
                    style={{
                      color: '#ECDBFA',
                      fontSize: 24,
                      lineHeight: 32,
                      marginLeft: 10,
                      fontFamily: 'Montserrat-Medium',
                    }}>
                    {i.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Language;
