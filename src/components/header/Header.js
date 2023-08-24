import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {verticalScale, moderateScale, scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../buttons/CustomButton';
import menuIcon from '../../assets/icons/menu.png';
import userIcon from '../../assets/icons/user.png';
import bellIcon from '../../assets/icons/bell.png';
import closeIcon from '../../assets/icons/close.png';

const Header = ({userImg, name, email, onPress}) => {
  const navigation = useNavigation();
  //console.log(userImg);
  const [pressed, setPressed] = useState(false);
  const [tab, setTab] = useState(0);

  return (
    <View style={styles.header}>
      {/* Header Left */}
      <TouchableOpacity
        style={styles.menu}
        onPress={() => setPressed(!pressed)}>
        <Image source={menuIcon} style={styles.menuIcon} />
      </TouchableOpacity>
      {/* Custom Drawer */}
      {pressed ? (
        <View style={styles.drawerContainer}>
          <TouchableOpacity onPress={() => setPressed(!pressed)}>
            <Image source={closeIcon} style={styles.drawerCloseIcon} />
          </TouchableOpacity>
          {userImg === null ? (
            <Image source={userIcon} style={styles.drawerImage} />
          ) : (
            <Image source={{uri: userImg}} style={styles.drawerImage} />
          )}
          <View style={styles.drawerInfo}>
            <Text style={styles.drawerName}>{name}</Text>
            <Text style={styles.drawerEmail}>{email}</Text>
            <View style={styles.horizontalSpacer} />
            <View style={styles.horizontalLine} />
            <View style={styles.horizontalSpacer} />
            <TouchableOpacity
              onPress={() => [setTab(0), navigation.navigate('Favourites')]}
              style={[
                styles.drawerButton,
                tab === 0
                  ? {backgroundColor: '#71f0f5'}
                  : {backgroundColor: '#efefef'},
              ]}>
              <Text style={styles.drawerButtonText}>Your Favourite's</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => [setTab(1), navigation.navigate('Recents')]}
              style={[
                styles.drawerButton,
                tab === 1
                  ? {backgroundColor: '#71f0f5'}
                  : {backgroundColor: '#efefef'},
              ]}>
              <Text style={styles.drawerButtonText}>Recent Order's</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => [setTab(2), navigation.navigate('History')]}
              style={[
                styles.drawerButton,
                tab === 2
                  ? {backgroundColor: '#71f0f5'}
                  : {backgroundColor: '#efefef'},
              ]}>
              <Text style={styles.drawerButtonText}>Order History</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => [setTab(3), navigation.navigate('Profile')]}
              style={[
                styles.drawerButton,
                tab === 3
                  ? {backgroundColor: '#71f0f5'}
                  : {backgroundColor: '#efefef'},
              ]}>
              <Text style={styles.drawerButtonText}>User Profile</Text>
            </TouchableOpacity>
            <View style={styles.wideSpacing} />
            <CustomButton title="Sign Out" onPress={onPress} />
          </View>
        </View>
      ) : null}
      {/* Header Right */}
      <View style={styles.headerRight}>
        <Image source={bellIcon} style={styles.notificationIcon} />
        <View style={styles.spacer} />
        {userImg === null ? (
          <Image source={userIcon} style={styles.userPhoto} />
        ) : (
          <Image style={styles.userPhoto} source={{uri: userImg}} />
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: moderateScale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aeaeae',
  },
  menu: {
    backgroundColor: '#dee0e3',
    padding: moderateScale(10),
    borderRadius: moderateScale(50),
  },
  userPhoto: {
    height: scale(40),
    width: scale(40),
    borderRadius: moderateScale(30),
    borderWidth: moderateScale(3),
    borderColor: '#ed09e6',
  },
  menuIcon: {
    height: scale(25),
    width: scale(25),
    tintColor: '#252525',
  },
  drawerContainer: {
    backgroundColor: '#fff',
    height: scale(570),
    width: scale(230),
    position: 'absolute',
    top: 0,
    left: 0,
    elevation: 10, //android
    zIndex: 10, // ios
    padding: moderateScale(15),
    borderRadius: moderateScale(10),
  },
  drawerCloseIcon: {
    tintColor: 'red',
    height: scale(40),
    width: scale(40),
  },
  drawerImage: {
    height: scale(85),
    width: scale(85),
    borderRadius: moderateScale(100),
    alignSelf: 'center',
    borderColor: '#ed09e6',
    borderWidth: moderateScale(4),
  },
  drawerInfo: {
    marginTop: moderateScale(20),
  },
  drawerName: {
    color: '#252525',
    fontSize: moderateScale(18),
    fontFamily: 'RobotoSlab-Medium',
    textAlign: 'center',
  },
  drawerEmail: {
    color: '#787a7a',
    fontSize: moderateScale(15),
    fontFamily: 'RobotoSlab-Medium',
    textAlign: 'center',
  },
  horizontalLine: {
    borderWidth: 1,
    borderColor: '#c9d1d1',
  },
  drawerButton: {
    width: '100%',
    padding: moderateScale(10),
    marginBottom: moderateScale(10),
    borderRadius: moderateScale(10),
  },
  drawerButtonText: {
    color: '#252525',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    fontSize: moderateScale(14),
  },
  wideSpacing: {
    height: verticalScale(24),
  },
  horizontalSpacer: {
    height: scale(10),
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer: {
    padding: verticalScale(5),
  },
  notificationIcon: {
    height: scale(30),
    width: scale(30),
    tintColor: '#818891',
  },
});
