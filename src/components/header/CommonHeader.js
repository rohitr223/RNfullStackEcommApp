import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import backIcon from '../../assets/icons/back.png';

const CommonHeader = ({onPress, heading}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress} style={styles.toucable}>
        <Image source={backIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: moderateScale(15),
    alignItems: 'center',
    backgroundColor: '#79155B',
  },
  toucable: {
    width: '13%',
  },
  icon: {
    height: scale(30),
    width: scale(30),
    tintColor: '#EFEFEF',
  },
  heading: {
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-SemiBold',
    color: '#EFEFEF',
  },
});
