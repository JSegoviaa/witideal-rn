import React from 'react';
import { ScrollView, View } from 'react-native';
import Destacados from '../components/PropertiesListScreen/Destacados';
import PropertiesList from '../components/PropertiesListScreen/PropertiesList';
import { appStyles } from '../theme/appTheme';
import GradientBackground from '../components/PropertiesListScreen/GradientBackground';
import { StackScreenProps } from '@react-navigation/stack';
import { RootSearchStackNavigation } from '../navigation/SearchStackNavigation';

const inmuebles = [
  {
    id: 1,
    title: 'Inmueble 1',
    precio: 12222,
    desc: 'Descripción 1',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FAdHaIDPSe3a2BGl5EdzB%2Fthumb%401100_488011_4.jpg?alt=media',
  },

  {
    id: 2,
    title: 'Inmueble 2',
    precio: 12222,
    desc: 'Descripción 2',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FxpBJNkkSSUzm3gRzjyxS%2Fthumb%401100_399429_descarga.jpg?alt=media',
  },
  {
    id: 3,
    title: 'Inmueble 3',
    precio: 12222,
    desc: 'Descripción 3',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FSlmQwNroraXIloP6EzKn%2Fthumb%401100_301215_3.jpg?alt=media',
  },
  {
    id: 4,
    title: 'Inmueble 4',
    precio: 12222,
    desc: 'Descripción 4',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2Fx9LUhwIgP8EM3aBR626C%2Fthumb%401100_275716_125400261.jpg?alt=media',
  },
  {
    id: 5,
    title: 'Inmueble 5',
    precio: 12222,
    desc: 'Descripción 5',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FbToynbJrydhGQXHaBwge%2Fthumb%401100_330959__FI.jpg?alt=media',
  },
  {
    id: 6,
    title: 'Inmueble 6',
    precio: 12222,
    desc: 'Descripción 6',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FAdHaIDPSe3a2BGl5EdzB%2Fthumb%401100_488011_4.jpg?alt=media',
  },
];

interface Props
  extends StackScreenProps<RootSearchStackNavigation, 'PropertiesListScreen'> {}

const PropertiesListScreen = ({ route }: Props) => {
  const { action, currency, isCommercial, propertyType } = route.params;
  console.log(action, currency, isCommercial, propertyType, ' desde la lista');

  return (
    <ScrollView>
      <GradientBackground>
        <Destacados />
      </GradientBackground>
      <View style={{ backgroundColor: '#fff' }}>
        <View style={appStyles.container}>
          {inmuebles.map(item => (
            <PropertiesList key={item.id} inmueble={item} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default PropertiesListScreen;
