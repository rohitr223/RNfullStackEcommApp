import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import imageNotAvailable from '../../assets/images/imageNotAvailable.png';
import StarRating from '../rating/StarRating';

const Card = ({onPress, image, name, reviews, rating, price, color}) => {
  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor: color}]}
      onPress={onPress}>
      {/* Check if the image uri is available or not */}
      {image == null ? (
        <Image source={imageNotAvailable} style={styles.noImage} />
      ) : (
        <Image source={{uri: image}} style={styles.image} />
      )}
      <View style={styles.cardInfo}>
        <Text style={styles.name}>{name}</Text>
        {/* Check if the ratings are available or not */}
        {rating == null ? (
          <Text>No Rating Available</Text>
        ) : (
          <View style={styles.userRatings}>
            <StarRating rating={rating} />
            <Text style={styles.reviews}>({reviews})</Text>
          </View>
        )}
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: '49%',
    padding: moderateScale(3),
    borderTopLeftRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(30),
    marginVertical: moderateScale(5),
    marginHorizontal: moderateScale(3),
  },
  noImage: {
    width: scale(100),
    height: scale(100),
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: scale(130),
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
  },
  cardInfo: {
    paddingLeft: moderateScale(10),
  },
  name: {
    fontSize: moderateScale(15),
    fontFamily: 'Poppins-Regular',
    marginTop: moderateScale(5),
  },
  userRatings: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviews: {
    fontSize: moderateScale(10),
    fontFamily: 'RobotoSlab-Black',
  },
  price: {
    fontSize: moderateScale(15),
    fontFamily: 'RobotoSlab-Bold',
    color: '#418726',
    marginVertical: moderateScale(10),
  },
});
