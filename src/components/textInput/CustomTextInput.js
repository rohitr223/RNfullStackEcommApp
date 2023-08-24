import React from 'react';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';

const CustomTextInput = ({
  borderColor,
  tintColor,
  placeholder,
  placeholderTextColor,
  icon,
  maxLetterLength,
  type,
  textColor,
  value,
  onChangeText,
  keyboardType,
}) => {
  return (
    <View style={[styles.container, {borderColor: borderColor}]}>
      <Image source={icon} style={[styles.icon, {tintColor: tintColor}]} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={type ? true : false}
        style={[styles.textInput, {color: textColor}]}
        maxLength={maxLetterLength}
        keyboardType={keyboardType ? keyboardType : 'default'}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderBottomWidth: 9,
    borderLeftWidth: 7,
    width: '90%',
    alignSelf: 'center',
    borderRadius: moderateScale(15),
    padding: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: scale(25),
    width: scale(25),
  },
  textInput: {
    flex: 1,
    marginLeft: moderateScale(10),
  },
});
