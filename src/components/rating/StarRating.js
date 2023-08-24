import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import starIcon from '../../assets/icons/star.png';
import {scale} from 'react-native-size-matters';

const StarRating = ({rating}) => {
  // Converting rating data into math function to round up the number
  const filledStars = Math.floor(rating);
  const remainingStars = 5 - filledStars;

  return (
    <View>
      {/* Check if the rating is available or not */}
      {rating == null ? (
        <Text>Rating Not Available!</Text>
      ) : (
        <View style={styles.starRatingContainer}>
          {/* Render filled stars */}
          {[...Array(filledStars)].map((_, index) => (
            <Image source={starIcon} style={styles.filledStars} key={index} />
          ))}
          {/* Render remaining outlined stars */}
          {[...Array(remainingStars)].map((_, index) => (
            <Image
              source={starIcon}
              style={styles.emptyStars}
              key={filledStars + index}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  starRatingContainer: {
    flexDirection: 'row',
  },
  filledStars: {
    tintColor: '#FF5D6C',
    height: scale(15),
    width: scale(15),
  },
  emptyStars: {
    tintColor: '#263A29',
    height: scale(15),
    width: scale(15),
  },
});
