import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import Destacados from '../components/PropertiesListScreen/Destacados';
import PropertiesList from '../components/PropertiesListScreen/PropertiesList';
import { appStyles } from '../theme/appTheme';

const inmuebles = [
  {
    id: 1,
    title: 'Inmueble 1',
    desc: 'Descripción 1',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FAdHaIDPSe3a2BGl5EdzB%2Fthumb%401100_488011_4.jpg?alt=media',
  },

  {
    id: 2,
    title: 'Inmueble 2',
    desc: 'Descripción 2',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FxpBJNkkSSUzm3gRzjyxS%2Fthumb%401100_399429_descarga.jpg?alt=media',
  },
  {
    id: 3,
    title: 'Inmueble 3',
    desc: 'Descripción 3',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FSlmQwNroraXIloP6EzKn%2Fthumb%401100_301215_3.jpg?alt=media',
  },
  {
    id: 4,
    title: 'Inmueble 4',
    desc: 'Descripción 4',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2Fx9LUhwIgP8EM3aBR626C%2Fthumb%401100_275716_125400261.jpg?alt=media',
  },
  {
    id: 5,
    title: 'Inmueble 5',
    desc: 'Descripción 5',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FbToynbJrydhGQXHaBwge%2Fthumb%401100_330959__FI.jpg?alt=media',
  },
  {
    id: 6,
    title: 'Inmueble 6',
    desc: 'Descripción 6',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FAdHaIDPSe3a2BGl5EdzB%2Fthumb%401100_488011_4.jpg?alt=media',
  },
];

const PropertiesListScreen = () => {
  return (
    <>
      <Destacados />
      <View style={{ backgroundColor: '#fff',paddingBottom:30 }}>
        <View style={appStyles.container}>
          <FlatList
            data={inmuebles}
            renderItem={({ item }: any) => <PropertiesList inmueble={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
    color: '#1E0E6F',
    fontSize: 30,
    fontWeight: '700',
    padding: 15,
  },
});

export default PropertiesListScreen;
