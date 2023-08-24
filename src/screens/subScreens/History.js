import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {CommonHeader} from '../../components';

const History = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CommonHeader
        heading="History"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
