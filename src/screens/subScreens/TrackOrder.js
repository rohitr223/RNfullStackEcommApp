import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CommonHeader} from '../../components';

const TrackOrder = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CommonHeader
        heading="Track Orders"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
