import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootProfileStackNavigation } from '../../navigation/ProfileStackNavigation';

const MyFavoristListItem = ({ favorites }: any) => {
  const navigation =
    useNavigation<
      StackNavigationProp<RootProfileStackNavigation, 'MyFavoritesScreen'>
    >();

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('FavoriteDetailScreen', {
            id: favorites.id,
            action: favorites.data.action,
            propertyType: favorites.data.propertyType,
          });
        }}>
        <Image
          width={500}
          height={50}
          style={{ width: '100%', height: 200 }}
          source={{
            uri: `${favorites.img}`,
          }}
        />
        <Text style={styles.textCenter}>{favorites.title}</Text>

        <Text style={styles.subtitle}>{favorites.desc}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnActivate: {
    alignItems: 'center',
    backgroundColor: '#3F19F9',
    borderRadius: 50,
    flex: 1,
    padding: 7,
    marginRight: 10,
  },
  btnDest: {
    padding: 7,
    alignItems: 'center',
    flex: 1,
    borderColor: '#63C5FA',
    borderRadius: 50,
    borderWidth: 1,
    marginLeft: 10,
  },
  card: {
    elevation: 1,
    borderRadius: 2,
    marginBottom: 10,
    marginTop: 10,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#000',
    padding: 5,
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 18,
    color: '#1e0e6f',
    fontWeight: '700',
    padding: 5,
  },
});

export default MyFavoristListItem;
