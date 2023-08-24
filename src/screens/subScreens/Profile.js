import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {CommonHeader} from '../../components';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CommonHeader
        heading="Profile"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
