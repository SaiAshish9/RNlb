import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, Dimensions,View} from 'react-native';

const {width, height} = Dimensions.get('window');

const SmallLGBtn = ({text,selected}) => {
  return (
    <>
      {selected ? (
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#C01C8A', '#865CF4']}
          style={{
            height: 36,
            borderRadius: 10,
            // marginTop: 25,
            display: 'flex',
            // height: height * 0.09,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 100,
            width: 57,
          }}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              fontSize: 12,
              lineHeight: 16,
              color: '#fff',
              opacity: 0.87,
            }}>
            {text}
          </Text>
        </LinearGradient>
      ) : (
        <View
          style={{
            height: 36,
            borderRadius: 10,
            borderColor: '#DF2EDC',
            opacity:0.5,
            borderWidth: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // elevation: 100,
            width: 57,
          }}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              fontSize: 12,
              lineHeight: 16,
              color: '#fff',
              opacity: 0.87,
            }}>
            {text}
          </Text>
        </View>
      )}
    </>
  );
};

export default SmallLGBtn;
