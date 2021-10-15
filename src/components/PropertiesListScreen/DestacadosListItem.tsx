import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
  id: Number;
  title: String;
  img: String;
  price: Number;
  description: String;
}

const DestacadosListItem = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: item.img }}
          style={{
            width: 300,
            height: 200,
          }}
        />

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.precio}> ${item.price} MXN</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 7,
    elevation: 3,
    margin: 20,
  },
  container: {
    backgroundColor: '#3F19F9',
  },
  description: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  precio: {
    color: '#1C006F',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  title: {
    color: '#1C006F',
    fontSize: 21,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default DestacadosListItem;
