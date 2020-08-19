import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import GradientCircle from '../components/gradientCircle';
import LinearGradient from 'react-native-linear-gradient';
import SmallBtn from '../svgs/smallBtn';
import {Context as AuthContext} from '../api/contexts/authContext';

const {width, height} = Dimensions.get('window');

const options = [
  require('../assets/back.png'),
  require('../assets/ic_cart2.png'),
  require('../assets/ic_filter.png'),
  require('../assets/ic_search.png'),
];

const LootStore = ({navigation}) => {
  const {fetchCategories} = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [current, setCurrent] = useState(0);

  const fetchData = async () => {
    const categories = await fetchCategories();
    if (categories) {
      setData(categories);
      var x = categories.map((i) => i.name_en);
      setCategories(x);
      var y = categories.map((i) => {
        return i.sub_category.map((x) => x.name);
      });
      setSubCategories(y);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#261D2A',
        width: width,
        // minHeight: height * 0.2,
        overflowX: 'hidden',
      }}>
      <ImageBackground
        source={require('../assets/dottedBackground.png')}
        style={{
          width,
          height,
          //   overflow: 'hidden',
          paddingHorizontal: width * 0.1,
          //   paddingVertical: height * 0.05,
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            width: width * 0.8,
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {options.map(
              (i, k) =>
                k === 0 && (
                  <TouchableOpacity
                    key={k}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Image
                      resizeMode="contain"
                      source={i}
                      style={{
                        width: 48,
                      }}
                    />
                  </TouchableOpacity>
                ),
            )}
            <View
              style={{
                width: '54%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              {options.map(
                (i, k) =>
                  k !== 0 && (
                    <TouchableOpacity key={k} onPress={() => {}}>
                      {k === 1 && (
                        <LinearGradient
                          start={{x: 0, y: 1}}
                          end={{x: 1, y: 0}}
                          colors={['#C01C8A', '#865CF4']}
                          style={{
                            width: 16,
                            height: 16,
                            position: 'absolute',
                            right: -2,
                            top: -3,
                            zIndex: 100,
                            borderRadius: 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              color: '#fff',
                              fontSize: 12,
                              fontFamily: 'Montserrat-Bold',
                            }}>
                            2
                          </Text>
                        </LinearGradient>
                      )}
                      <Image
                        resizeMode="contain"
                        source={i}
                        style={{
                          width: 48,
                        }}
                      />
                    </TouchableOpacity>
                  ),
              )}
            </View>
          </View>
          <Text
            style={{
              color: '#ECDBFA',
              fontSize: 12,
              lineHeight: 16,
            }}>
            DISCOVER
          </Text>
          <Text
            style={{
              color: '#ECDBFA',
              fontSize: 20,
              fontFamily: 'Michroma-Regular',
            }}>
            Loot Store
          </Text>

          {data ? (
            <View style={{width: '100%'}}>
              <ScrollView
                style={{
                  marginTop: 27,
                  height: height * 0.1,
                }}
                contentContainerStyle={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}
                showsVerticalScrollIndicator={false}
                horizontal>
                {categories.map((i, k) => (
                  <TouchableOpacity
                    onPress={() => {
                      setCurrent(k);
                    }}
                    key={k}>
                    {k === current && (
                      <GradientCircle
                        style={{
                          position: 'absolute',
                        }}
                      />
                    )}
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Montserrat-Bold',
                        //   lineHeight: 16,
                        color: '#ECDBFA',
                        opacity: k === current ? 1 : 0.4,
                        marginLeft: k === current ? 10 : 0,
                      }}>
                      {i}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              <View style={{width: '100%'}}>
                <ScrollView
                  contentContainerStyle={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal>
                  {subCategories[current] &&
                    subCategories[current].map((i, k) => (
                      <TouchableOpacity
                        style={{
                          marginRight: 10,
                          // width:70
                        }}
                        key={k}
                        onPress={() => {}}>
                        {k < 3 ? (
                          <SmallBtn text={i} />
                        ) : (
                          <SmallBtn text={i} isLarge />
                        )}
                      </TouchableOpacity>
                    ))}
                </ScrollView>
              </View>
              <View
                style={{
                  display: 'flex',
                  marginVertical: 50,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}>
                {[...Array(6).keys()].map((i, k) => (
                  <ImageBackground
                    key={k}
                    source={require('../assets/ic_card_a0.png')}
                    resizeMode="contain"
                    style={{
                      height: 170,
                      display: 'flex',
                      //   alignItems: 'center',
                      // justifyContent: 'center',
                      padding: 20,
                      width: width * 0.36,
                      marginVertical: 10,
                    }}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/mouse.png')}
                      style={{
                        width: 97,
                        height: 79,
                        position: 'absolute',
                        top: -30,
                        left: '30%',
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: 'Montserrat-Regular',
                        color: '#D2D7F9',
                        opacity: 0.5,
                        fontSize: 14,
                        marginTop: 60,
                      }}>
                      Intel
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#ECDBFA',
                        fontFamily: 'Montserrat-Bold',
                      }}>
                      i7 6469k
                    </Text>
                    <Text
                      style={{
                        color: '#DF2EDC',
                        fontSize: 12,
                        fontFamily: 'Montserrat-Regular',
                      }}>
                      KD 2,200
                    </Text>
                  </ImageBackground>
                ))}
              </View>
            </View>
          ) : (
            <View style={{marginTop: height * 0.35}}>
              <ActivityIndicator color="#ECDBFA" size="small" />
            </View>
          )}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default LootStore;
