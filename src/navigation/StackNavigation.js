import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// screens
import {
  Splash,
  SignUp,
  SignIn,
  StartScreen,
  Favourites,
  Recents,
  History,
  Profile,
  Daily,
  Grocery,
  Electronics,
  Fashion,
  Food,
  SelectedItem,
} from '../screens';
import BottomTab from '../navigation/BottomTab';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Favourites"
          component={Favourites}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Recents"
          component={Recents}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Daily"
          component={Daily}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Grocery"
          component={Grocery}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Fashion"
          component={Fashion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Food"
          component={Food}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Electronics"
          component={Electronics}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectedItem"
          component={SelectedItem}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
