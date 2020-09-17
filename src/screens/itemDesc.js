import React, {useEffect, useContext, useState} from 'react';
import {
  ImageBackground,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Btn from './btn';
import {Context as AuthContext} from '../api/contexts/authContext';

const {width, height} = Dimensions.get('window');

const performanceDetails = [
  {
    text: '# of Cores',
    desc: '8',
  },
  {
    text: '# of Threads',
    desc: '8',
  },
  {
    text: 'Processor Base Frequency',
    desc: '3.6 GHz',
  },
  {
    text: 'Max Turbo Frequency',
    desc: '4.9 GHz',
  },
  {
    text: 'Cache',
    desc: '12 MB Intel® Smart Cache',
  },
];

const processorDetails = [
  {
    text: 'Processor Graphics',
    desc: 'Intel® UHD Graphics 630',
  },
  {
    text: 'Graphics Base Frequency',
    desc: '350 MHz',
  },
  {
    text: 'Processor Base Frequency',
    desc: '3.6 GHz',
  },
  {
    text: 'Graphics Max Dynamic Frequency',
    desc: '64 GB',
  },
];

const data = [performanceDetails, processorDetails];

const ItemDesc = ({route, navigation}) => {
  const {fetchItemsInfo} = useContext(AuthContext);
  const [itemData, setData] = useState([]);
  const [qty, setQty] = useState(1);

  const fetchData = async () => {
    const data1 = await fetchItemsInfo(route.params.id);
    if (data1 && data1.length > 0) {
      console.log(data1)
      setData(data1);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        width,
        height,
        overflowX: 'hidden',
        backgroundColor: '#261D2A',
      }}>
      <ImageBackground
        source={require('../assets/plainBg.png')}
        style={{
          width,
          padding: width * 0.1,
        }}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              resizeMode="contain"
              source={require('../assets/back.png')}
              style={{
                height: 48,
                width: 48,
              }}
            />
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={() => {}}>
              <Image
                resizeMode="contain"
                source={require('../assets/ic_cart2.png')}
                style={{width: 40}}
              />
            </TouchableOpacity>

            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              colors={['#C01C8A', '#865CF4']}
              style={{
                width: 16,
                height: 16,
                position: 'absolute',
                right: -4,
                top: -1,
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
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: height * 0.05,
          }}>
          {route.params.image ? (
            <Image
              source={{
                uri: route.params.image,
              }}
              style={{
                height: 126,
                width: 126,
                marginRight: width * 0.05,
              }}
            />
          ) : (
            <Image
              // source={{
              //   uri:
              //     'https://cdn.pixabay.com/photo/2015/03/21/06/27/technology-683243_960_720.png',
              // }}
              source={
                route.params.image
                  ? route.params.image
                  : require('../assets/thumbnail1.png')
              }
              style={{
                height: 126,
                width: 126,
                marginRight: width * 0.05,
              }}
            />
          )}

          <View>
            <Text
              style={{
                color: '#ECDBFA',
                fontSize: 20,
                fontFamily: 'Michroma-Regular',
              }}>
              {route.params.name}
            </Text>
            <Text
              style={{
                color: '#ECDBFA',
                fontSize: 14,
                opacity: 0.5,
                fontFamily: 'Michroma-Regular',
              }}>
              {route.params.brand}
            </Text>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Michroma-Regular',
              color: '#ECDBFA',
              opacity: 0.5,
            }}>
            Price
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Michroma-Regular',
              color: '#ECDBFA',
            }}>
            KD {parseInt(route.params.price)}
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Michroma-Regular',
              color: '#ECDBFA',
              opacity: 0.5,
            }}>
            Qty
          </Text>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => {
                qty > 1 && setQty(qty - 1);
              }}>
              <Image
                source={require('../assets/ic_sub.png')}
                resizeMode="contain"
                style={{
                  width: 38,
                  height: 24,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Michroma-Regular',
                color: '#ECDBFA',
                marginHorizontal: 10,
              }}>
              {qty}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setQty(qty + 1);
              }}>
              <Image
                source={require('../assets/ic_add.png')}
                resizeMode="contain"
                style={{
                  width: 38,
                  height: 24,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Michroma-Regular',
            color: '#ECDBFA',
            opacity: 0.5,
            marginTop: 20,
          }}>
          Description
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: 'Montserrat-Regular',
            color: 'rgba(236,219,250,0.5)',
            marginTop: 10,
          }}>
          {route.params.description}
          {/* Nulla ut mollis nisi. Nullam consequat euismod tellus volutpat
          sodales. In mauris elit, hendrerit ut pharetra hendrerit, viverra nec{' '} */}
          <Text
            style={{
              color: '#ECDBFA',
              fontFamily: 'Montserrat-Bold',
            }}>
            {' '}
            {/* more */}
          </Text>
        </Text>

        {data.map(
          (i, k) =>
            k === 0 && (
              <LinearGradient
                key={k}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['rgba(255,255,255,0.069)', 'rgba(255,255,255,0.003) ']}
                style={[
                  {
                    borderRadius: 10,
                    marginTop: 27,
                    width: width * 0.8,
                  },
                ]}>
                <View
                  style={{
                    width: '100%',
                    height: height * 0.07,
                    display: 'flex',
                    justifyContent: 'center',
                    borderBottomColor: 'rgba(151,151,151,0.12)',
                    borderBottomWidth: 1,
                  }}>
                  <Text
                    style={{
                      marginLeft: '7%',
                      fontFamily: 'Montserrat-Regular',
                      color: '#ECDBFA',
                      fontSize: 14,
                    }}>
                    {k === 0 ? 'Performance' : 'Processor Graphics'}
                  </Text>
                </View>
                <View
                  style={{
                    padding: '7%',
                    width: '100%',
                    minHeight: height * 0.27,
                  }}>
                  {itemData.length > 0 ? (
                    itemData.map((a, b) => (
                      <View
                        key={b}
                        style={{
                          width: '100%',
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          marginVertical: 10,
                          display: 'flex',
                        }}>
                        <Text
                          style={{
                            width: '50%',
                            color: '#ECDBFA',
                            fontSize: 12,
                            fontFamily: 'Montserrat-Regular',
                            opacity: 0.5,
                          }}>
                          {a.name}
                        </Text>
                        <Text
                          style={{
                            width: '50%',
                            color: '#ECDBFA',
                            fontSize: 12,
                            fontFamily: 'Montserrat-Regular',
                            opacity: 0.5,
                            textAlign: 'right',
                            paddingLeft: 20,
                          }}>
                          {a.value_en ? a.value_en : 0}
                        </Text>
                      </View>
                    ))
                  ) : (
                    <View style={{width: '100%', marginTop: height * 0.1}}>
                      <ActivityIndicator color="#ECDBFA" size="small" />
                    </View>
                  )}
                </View>
              </LinearGradient>
            ),
        )}

        <TouchableOpacity onPress={() => {}}>
          <Btn text="ADD TO CART" />
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};

export default ItemDesc;
