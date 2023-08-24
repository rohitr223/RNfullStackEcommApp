import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {verticalScale, moderateScale, scale} from 'react-native-size-matters';

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnContainer: {
    height: scale(30),
    width: scale(140),
    backgroundColor: '#252525',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: moderateScale(50),
  },
  btnText: {
    color: '#EFEFEF',
    fontFamily: 'RobotoSlab-Bold',
  },
});
