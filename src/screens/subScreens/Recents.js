import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {CommonHeader} from '../../components';

const Recents = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CommonHeader
        heading="Recent Order's"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Recents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
