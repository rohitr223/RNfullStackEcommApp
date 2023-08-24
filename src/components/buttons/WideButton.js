import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

const WideButton = ({onPress, title, backgroundColor, textColor, disabled}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      disabled={disabled}
      style={[styles.btn, {borderColor: backgroundColor}]}
      onPress={onPress}>
      <Text style={[styles.btnTitle, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default WideButton;

const styles = StyleSheet.create({
  btn: {
    width: '90%',
    padding: moderateScale(10),
    borderRadius: moderateScale(15),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: moderateScale(3),
    borderBottomWidth: moderateScale(8),
    borderLeftWidth: moderateScale(5),
  },
  btnTitle: {
    fontSize: moderateScale(18),
    fontFamily: 'Poppins-SemiBold',
  },
});
