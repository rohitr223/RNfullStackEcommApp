import React, {useState, useEffect} from 'react';
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
import auth from '@react-native-firebase/auth';
import NetInfo from '@react-native-community/netinfo';
import {verticalScale, moderateScale, scale} from 'react-native-size-matters';
import {WideButton, CustomTextInput} from '../../components';
// icons
import lockIcon from '../../assets/icons/lock.png';
import emailIcon from '../../assets/icons/email.png';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // checking the internet connectivity
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      //console.log(state);
      if (state.isConnected === true) {
        // internet is connected
        //console.log('Internet Is Connected.');
      } else {
        Alert.alert(
          'No Internet!',
          'This app may not work properly without internet connectivity.',
        );
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Login the user
  const loginUser = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        //console.log(res.user);
        navigation.navigate('Home');
      })
      .catch(err => {
        Alert.alert('Error Occoured', err.message);
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
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subTitle}>Please SignIn to Continue</Text>
        <View style={styles.form}>
          <CustomTextInput
            borderColor="#77037B"
            tintColor="#77037B"
            textColor="#77037B"
            icon={emailIcon}
            placeholder="Enter Your Email"
            placeholderTextColor="#77037B"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <View style={styles.spacer} />
          <CustomTextInput
            borderColor="#77037B"
            tintColor="#77037B"
            textColor="#77037B"
            icon={lockIcon}
            placeholder="Enter Your Password"
            placeholderTextColor="#77037B"
            type="password"
            maxLetterLength={8}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <View style={styles.spacer} />
          <WideButton
            backgroundColor={!email || !password ? '#77037B' : '#557A46'}
            textColor={!email || !password ? '#77037B' : '#557A46'}
            title="Sign In"
            disabled={!email || !password}
            onPress={loginUser}
          />
        </View>
        <View style={styles.signIn}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signInText}>Not an user? Create Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

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
    tintColor: '#77037B',
    alignSelf: 'center',
    height: scale(100),
    width: scale(100),
  },
  title: {
    fontSize: moderateScale(30),
    color: '#77037B',
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
  spacer: {
    height: verticalScale(15),
  },
  signIn: {
    alignSelf: 'center',
    marginTop: verticalScale(20),
  },
  signInText: {
    color: 'blue',
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-SemiBold',
    textDecorationLine: 'underline',
  },
});
