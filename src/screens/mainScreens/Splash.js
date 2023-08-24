import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const Splash = ({navigation}) => {
  // navigate to SignUp screen after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('BottomTab');
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <View style={styles.spacing} />
      <Image
        source={require('../../assets/icons/basket.png')}
        style={styles.image}
      />
      <Text style={styles.title}>EComm App</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    tintColor: '#FFF',
    height: scale(140),
    width: scale(140),
  },
  spacing: {
    height: verticalScale(30),
  },
  title: {
    color: '#FFF',
    fontFamily: 'Poppins-ExtraBoldItalic',
    fontSize: moderateScale(30),
  },
});
