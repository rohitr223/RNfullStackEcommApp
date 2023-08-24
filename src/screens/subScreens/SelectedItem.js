import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {CommonHeader} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import imageNotAvailable from '../../assets/images/imageNotAvailable.png';
import {StarRating} from '../../components';

const SelectedItem = ({route}) => {
  const navigation = useNavigation();
  //console.log(navigation);
  const {name, pic, reviews, rating, cost, description, color} = route.params;
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <CommonHeader
          heading={name}
          onPress={() => navigation.navigate('Home')}
        />
        {/* Check if the image uri is available */}
        {pic == null ? (
          <Image source={imageNotAvailable} style={styles.mainImg} />
        ) : (
          <Image source={{uri: pic}} style={styles.mainImg} />
        )}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.userReviews}>
            <StarRating rating={rating} />
            <Text style={styles.reviews}>({reviews} Reviews)</Text>
          </View>
          <View style={styles.spacer} />
          <Text style={styles.cost}>{cost}</Text>
          <View style={styles.spacer} />
          <Text style={styles.description}>{description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SelectedItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  mainImg: {
    height: scale(250),
    width: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: moderateScale(10),
  },
  title: {
    fontSize: moderateScale(22),
    fontFamily: 'Poppins-SemiBold',
    color: '#183D3D',
  },
  userReviews: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviews: {
    fontSize: moderateScale(11),
    fontFamily: 'Poppins-Bold',
    color: '#252525',
  },
  cost: {
    fontSize: moderateScale(28),
    fontFamily: 'RobotoSlab-SemiBold',
    color: '#1A5D1A',
  },
  description: {
    fontSize: moderateScale(19),
    lineHeight: moderateScale(28),
  },
  spacer: {
    height: verticalScale(18),
  },
});
