import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {verticalScale, moderateScale, scale} from 'react-native-size-matters';
import {firebase} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import {launchImageLibrary} from 'react-native-image-picker';
import {WideButton, CustomTextInput} from '../../components';
// icons
import userIcon from '../../assets/icons/user.png';
import lockIcon from '../../assets/icons/lock.png';
import emailIcon from '../../assets/icons/email.png';

const SignUp = ({navigation}) => {
  // useState variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');

  // Create a new user account
  const createNewUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        return auth().currentUser.updateProfile({
          displayName: name,
          photoURL: photo,
        });
      })
      .then(() => {
        navigation.navigate('SignIn');
        //console.log(auth().currentUser);
      })
      .catch(err => {
        Alert.alert('Error Occoured', err.message);
      });
  };

  // React Native image picker
  const uploadProfileImage = () => {
    // image options
    const options = {
      mediaType: 'photo',
      quality: 0.8,
      maxWidth: 300,
      maxHeight: 300,
      saveToPhotos: true,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        Alert.alert('Error', 'Profile photo must be uploaded.');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setPhoto(imageUri);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/icons/user.png')}
          style={styles.icon}
        />
        <View style={styles.spacer} />
        <Text style={styles.title}>Let's Get Started</Text>
        <Text style={styles.subTitle}>Signup if you are a new user.</Text>
        <View style={styles.form}>
          <CustomTextInput
            borderColor="#257AA6"
            tintColor="#257AA6"
            icon={userIcon}
            textColor="#257AA6"
            placeholder="Enter Your Name"
            placeholderTextColor="#257AA6"
            maxLetterLength={40}
            value={name}
            onChangeText={text => setName(text)}
          />
          <View style={styles.spacer} />
          <CustomTextInput
            borderColor="#257AA6"
            tintColor="#257AA6"
            icon={emailIcon}
            textColor="#257AA6"
            placeholder="Enter Your Email"
            placeholderTextColor="#257AA6"
            maxLetterLength={40}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <View style={styles.spacer} />
          <CustomTextInput
            borderColor="#257AA6"
            tintColor="#257AA6"
            icon={lockIcon}
            type="password"
            placeholder="Create A Password (max 8 characters)"
            textColor="#257AA6"
            placeholderTextColor="#257AA6"
            maxLetterLength={8}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <View style={styles.spacer} />
          <WideButton
            title="Upload Your Profile Picture"
            backgroundColor={
              !name || !email || !password ? '#257AA6' : '#557A46'
            }
            textColor={!name || !email || !password ? '#257AA6' : '#557A46'}
            disabled={!name || !email || !password}
            onPress={uploadProfileImage}
          />
          <View style={styles.spacer} />
          <WideButton
            backgroundColor={
              !name || !email || !password || !photo ? '#257AA6' : '#557A46'
            }
            textColor={!name || !email || !password ? '#257AA6' : '#557A46'}
            title="Sign Up"
            // if name, email and password are not entered, then disable the button
            disabled={!name || !email || !password || !photo}
            onPress={createNewUser}
          />
        </View>
        <View style={styles.signIn}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.signInText}>Already an user? SignIn</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.spacingHeight} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollView: {
    flex: 1,
  },
  icon: {
    tintColor: '#257AA6',
    alignSelf: 'center',
    height: scale(100),
    width: scale(100),
  },
  title: {
    fontSize: moderateScale(30),
    color: '#257AA6',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: moderateScale(16),
    color: '#252525',
    textAlign: 'center',
  },
  form: {
    marginTop: moderateScale(20),
  },
  errorText: {
    fontFamily: 'Poppins-Medium',
    color: '#ff0000',
    fontSize: moderateScale(14),
    marginLeft: moderateScale(30),
    marginTop: moderateScale(3),
  },
  textInput: {
    borderWidth: 2,
    borderBottomWidth: 7,
    borderLeftWidth: 4,
    borderColor: '#257AA6',
    width: '90%',
    alignSelf: 'center',
    borderRadius: moderateScale(15),
    padding: moderateScale(15),
  },
  spacer: {
    height: verticalScale(15),
  },
  signIn: {
    marginTop: verticalScale(15),
    alignSelf: 'center',
  },
  signInText: {
    color: 'blue',
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-SemiBold',
    textDecorationLine: 'underline',
  },
  spacingHeight: {
    height: verticalScale(40),
  },
});
