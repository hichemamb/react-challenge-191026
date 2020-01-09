import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, SafeAreaView } from 'react-native';

const data = [
  {
    id: 1,
    name: "Thomas DERUEL",
    age: 25,
    img: "https://cdn.shopify.com/s/files/1/0246/4622/1903/products/legostarwars-display_300x300.png?v=1578179637"
  },
  {
    id: 2,
    name: "Thomas FRANJA",
    age: 29,
    img: "https://cdn.shopify.com/s/files/1/0246/4622/1903/products/legostarwars-display_300x300.png?v=1578179637"
  },
  {
    id: 4,
    name: "Hichem AMAR B",
    age: 21,
    img: "https://cdn.shopify.com/s/files/1/0246/4622/1903/products/legostarwars-display_300x300.png?v=1578179637"
  },
  {
    id: 5,
    name: "Hichem AMAR B",
    age: 21,
    img: "https://cdn.shopify.com/s/files/1/0246/4622/1903/products/legostarwars-display_300x300.png?v=1578179637"
  },
  {
    id: 6,
    name: "Hichem AMAR B",
    age: 21,
    img: "https://cdn.shopify.com/s/files/1/0246/4622/1903/products/legostarwars-display_300x300.png?v=1578179637"
  },
  {
    id: 7,
    name: "Hichem AMAR B",
    age: 21,
    img: "https://cdn.shopify.com/s/files/1/0246/4622/1903/products/legostarwars-display_300x300.png?v=1578179637"
  },
  {
    id: 8,
    name: "Hichem AMAR B",
    age: 21,
    img: "https://cdn.shopify.com/s/files/1/0246/4622/1903/products/legostarwars-display_300x300.png?v=1578179637"
  },
  {
    id: 9,
    name: "Hichem AMAR B",
    age: 21,
    img: "https://cdn.shopify.com/s/files/1/0246/4622/1903/products/legostarwars-display_300x300.png?v=1578179637"
  },
]
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  flex: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    textAlign: 'left'
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 12,
  },
  image: {
    width:60,
    height:60,
  }
});
const Item = ({item}) => {
  return(
    <View style={styles.item}>
      <Image resizeMode='cover' style={styles.image} source={{uri: "https://cdn.shopify.com/s/files/1/0246/4622/1903/products/legostarwars-display_300x300.png?v=1578179637"}} />
      <View style={styles.flex}>
        <Text>{item.name}</Text>
        <Text> {item.age} ans</Text>
      </View>
    </View>
      )
    }
const idExtractor = (item) => item.id;

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
        <FlatList 
        data={data} 
        renderItem={Item}
        keyExtractor={idExtractor}
        />
        </View>
      </ScrollView>  
    </SafeAreaView>
  );
}


export default App;