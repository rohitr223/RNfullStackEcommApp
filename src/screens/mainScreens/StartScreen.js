import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import {verticalScale, moderateScale} from 'react-native-size-matters';
import {WideButton} from '../../components';

const StartScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/shopping.png')}
        style={styles.image}
      />
      <View style={styles.spacer} />
      <View style={styles.spacer} />
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subTitle}>Join us to get exciting offers!</Text>
      <View style={styles.btnContainer}>
        <WideButton
          backgroundColor="#F94C10"
          title="Get Started"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  image: {
    width: '80%',
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: moderateScale(45),
    fontFamily: 'RobotoSlab-Bold',
    color: '#252525',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: moderateScale(18),
    fontFamily: 'Poppins-Medium',
    color: '#252525',
  },
  spacer: {
    height: verticalScale(10),
  },
  btnContainer: {
    width: '100%',
    position: 'absolute',
    bottom: verticalScale(30),
  },
});
