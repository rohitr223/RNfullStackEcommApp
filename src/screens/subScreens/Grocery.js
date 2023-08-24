import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Card} from '../../components';
import {useNavigation} from '@react-navigation/native';

const Grocery = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  const api = 'https://rohitr223.github.io/eCommerceAppApi/groceries.json';

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(api)
      .then(res => res.json())
      .then(json => {
        setData(json.groceries);
      })
      .catch(err => console.error(err));
  };

  return (
    <View style={styles.container}>
      {/*
        Note -:
        Since we are using a scrollview inside the Home.js container so we have to disable the scroll of
        the flatlist.
    */}
      <FlatList
        scrollEnabled={false}
        nestedScrollEnabled={true}
        data={data}
        numColumns={2}
        renderItem={({item}) => (
          <Card
            image={item.image}
            name={item.name}
            reviews={item.reviews}
            rating={item.rating}
            price={item.price}
            color={item.color}
            onPress={() =>
              navigation.navigate('SelectedItem', {
                name: item.name,
                pic: item.image,
                reviews: item.reviews,
                rating: item.rating,
                cost: item.price,
                description: item.description,
                color: item.color,
              })
            }
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Grocery;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
});
