import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, Alert} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import {Header, Content} from '../../components';

const Home = ({navigation}) => {
  // useState variables
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [photo, setPhoto] = useState(null);

  // continously track the user's presence
  useEffect(() => {
    currentUser();
  });

  // Get the current user.
  const user = firebase.auth().currentUser;

  // Check the user is already logged in or not.
  // If the user is not logged in then navigate to SignIn screen.
  const currentUser = () => {
    // check if the user in already logged.
    if (user) {
      // name
      setName(user.displayName);
      // email
      setEmail(user.email);
      // profile photo
      setPhoto(user.photoURL);
    } else {
      //console.log('User is not logged in.');
      navigation.navigate('StartScreen');
    }
  };
  //console.log(name, email, photo);

  // Make user to sign out
  const userSignOut = async () => {
    try {
      firebase
        .auth()
        .signOut()
        .then(() => {
          navigation.navigate('SignIn');
        });
    } catch (err) {
      Alert.alert('SignOut Failed!', err.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Here we are using a scrollview to avoid scrolling problems for our ui */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Header
          userImg={photo}
          name={name}
          email={email}
          onPress={userSignOut}
        />
        <Content />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
});
