import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {CommonHeader} from '../../components';

const Favourites = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CommonHeader
        heading="Favourite's"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
