import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

const DestacadosListItem = ({ item }: any) => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  return (
    <View>
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PropertyDetailScreen');
          }}>
          <Image
            source={{ uri: item.img }}
            style={{
              width: 260,
              height: 150,
            }}
          />
          <View style={{ paddingVertical: 10 }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.precio}> ${item.price} MXN</Text>
          </View>
        </TouchableOpacity>
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
