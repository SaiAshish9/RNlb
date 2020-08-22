import React, {useContext, useEffect, useState, useCallback} from 'react';
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
import SmallLGBtn from './smallLGBtn';

const {width, height} = Dimensions.get('window');

const options = [
  require('../assets/back.png'),
  require('../assets/ic_cart2.png'),
  require('../assets/ic_filter.png'),
  require('../assets/ic_search.png'),
];

const LootStore = ({navigation}) => {
  const {fetchCategories, fetchItems} = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [current, setCurrent] = useState(0);
  const [items, setItems] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    if (selectedSubCategory === 0) {
      await fetchData1();
    } else {
      if (selectedSubCategory === 1) {
        await fetchData1(
          subCategories[selectedSubCategory - 1].find(
            (x) => x.index + 1 === selectedSubCategory,
          )['id'],
        );
      }
    }
  }, [selectedSubCategory, current]);

  const fetchData1 = async (b) => {
    setLoading(true);
    const categories = await fetchCategories();
    if (categories) {
      setData(categories);
      var x = categories.map((i, k) => {
        return {id: i.category_id, name: i.name_en, index: k};
      });
      setCategories(x);
      var itemData = null;
      if (b) {
        itemData = await fetchItems(x[current]['id'], b);
      } else {
        itemData = await fetchItems(x[current]['id']);
      }
      if (itemData) setItems(itemData);
      var y = categories.map((i) => {
        return i.sub_category.map((x, k) => {
          return {
            name: x.name,
            id: x.sub_category_id,
            category_id: x.category_id,
            index: k,
          };
        });
      });
      setSubCategories(y);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
          paddingHorizontal: width * 0.1,
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
                  marginVertical: 20,
                  // height: height * 0.1,
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
                      setCurrent(i.index);
                      setSelectedSubCategory(0);
                    }}
                    key={i.index}>
                    {i.index === current && (
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
                        opacity: i.index === current ? 1 : 0.4,
                        marginLeft: i.index === current ? 10 : 0,
                      }}>
                      {i.name}
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
                  <TouchableOpacity
                    style={{
                      marginRight: 10,
                    }}
                    onPress={() => {
                      setSelectedSubCategory(0);
                    }}>
                    <SmallLGBtn
                      text="All"
                      selected={selectedSubCategory === 0}
                    />
                  </TouchableOpacity>

                  {subCategories[current] &&
                    subCategories[current].map((i, k) => (
                      <TouchableOpacity
                        style={{
                          marginRight: 10,
                        }}
                        key={k}
                        onPress={() => {
                          setSelectedSubCategory(k + 1);
                        }}>
                        <SmallLGBtn
                          text={i.name}
                          selected={selectedSubCategory === k + 1}
                        />
                      </TouchableOpacity>
                    ))}
                </ScrollView>
              </View>

              {loading ? (
                <View style={{marginTop: height * 0.27}}>
                  <ActivityIndicator color="#ECDBFA" size="small" />
                </View>
              ) : (
                <View
                  style={{
                    display: 'flex',
                    marginVertical: 50,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                  }}>
                  {items.map((i, k) => (
                    <View key={k}>
                      <TouchableOpacity
                        onPress={() => {
                          console.log(i)
                          navigation.push('itemDesc', {
                            price: i.price,
                            description: i.description,
                            brand: i.brand,
                            name: i.name,
                            id: i.item_id,
                          });
                        }}>
                        <ImageBackground
                          source={require('../assets/ic_card_a0.png')}
                          resizeMode="contain"
                          style={{
                            height: 170,
                            display: 'flex',
                            //   alignItems: 'center',
                            // justifyContent: 'center',
                            paddingLeft: 20,
                            paddingTop: 20,
                            width: width * 0.36,
                            marginVertical: 10,
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
                              fontFamily: 'Montserrat-Regular',
                              color: '#D2D7F9',
                              opacity: 0.5,
                              fontSize: 14,
                              marginTop: 60,
                            }}>
                            {i.brand}
                          </Text>
                          <Text
                            style={{
                              fontSize: 16,
                              color: '#ECDBFA',
                              fontFamily: 'Montserrat-Bold',
                            }}>
                            {i.name}
                          </Text>
                          <Text
                            style={{
                              color: '#DF2EDC',
                              fontSize: 12,
                              fontFamily: 'Montserrat-Regular',
                            }}>
                            {i.price}
                          </Text>
                        </ImageBackground>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              )}
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
