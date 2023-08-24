import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, TrackOrder, Profile} from '../screens';
import {scale} from 'react-native-size-matters';
// icons
import homeIcon from '../assets/icons/home.png';
import trackIcon from '../assets/icons/track.png';
import userIcon from '../assets/icons/user2.png';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#459af5',
        tabBarInactiveTintColor: '#bec0c2',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={homeIcon}
              style={[styles.tabBarIcon, {tintColor: color}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TrackOrder"
        component={TrackOrder}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={trackIcon}
              style={[styles.tabBarIcon, {tintColor: color}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={userIcon}
              style={[styles.tabBarIcon, {tintColor: color}]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabBarIcon: {
    height: scale(30),
    width: scale(30),
  },
});
