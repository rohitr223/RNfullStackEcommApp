import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Daily, Grocery, Electronics, Fashion, Food} from '../../screens';

const Content = () => {
  const [active, setActive] = useState(0);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={[
            styles.btn,
            {backgroundColor: active === 0 ? '#252525' : '#FFF'},
          ]}
          onPress={() => setActive(0)}>
          <Text
            style={[
              styles.btnTitle,
              {color: active === 0 ? '#FFF' : '#252525'},
            ]}>
            Daily
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            {backgroundColor: active === 1 ? '#252525' : '#FFF'},
          ]}
          onPress={() => setActive(1)}>
          <Text
            style={[
              styles.btnTitle,
              {color: active === 1 ? '#FFF' : '#252525'},
            ]}>
            Electronics
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            {backgroundColor: active === 2 ? '#252525' : '#FFF'},
          ]}
          onPress={() => setActive(2)}>
          <Text
            style={[
              styles.btnTitle,
              {color: active === 2 ? '#FFF' : '#252525'},
            ]}>
            Food
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            {backgroundColor: active === 3 ? '#252525' : '#FFF'},
          ]}
          onPress={() => setActive(3)}>
          <Text
            style={[
              styles.btnTitle,
              {color: active === 3 ? '#FFF' : '#252525'},
            ]}>
            Fashion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            {backgroundColor: active === 4 ? '#252525' : '#FFF'},
          ]}
          onPress={() => setActive(4)}>
          <Text
            style={[
              styles.btnTitle,
              {color: active === 4 ? '#FFF' : '#252525'},
            ]}>
            Groceries
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {/* Note -:
        Here we have used scrollview to enable vertical Scrolling,
        Since, scrollview and flatlists are not allowed together,
        we have disabled the scrolling of flatlist. We need flatlist
        because we have used an api.
      */}
      <View style={styles.subContainer}>
        {active === 0 ? (
          <Daily />
        ) : active === 1 ? (
          <Electronics />
        ) : active === 2 ? (
          <Food />
        ) : active === 3 ? (
          <Fashion />
        ) : active === 4 ? (
          <Grocery />
        ) : null}
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(10),
    backgroundColor: '#FFF',
  },
  btn: {
    paddingHorizontal: moderateScale(13),
    paddingVertical: moderateScale(8),
    marginLeft: moderateScale(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(50),
  },
  btnTitle: {
    fontFamily: 'Poppins-Bold',
  },
  subContainer: {
    paddingTop: moderateScale(10),
  },
});
