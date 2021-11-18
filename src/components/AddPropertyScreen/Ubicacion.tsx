import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

interface Location {
  latitude: number;
  longitude: number;
}

const Ubicacion = () => {
  const [coordinates, setCoordinates] = useState<Location>({
    longitude: 0,
    latitude: 0,
  });
  const [locality, setLocality] = useState('');

  return (
    <View>
      <Text>Escribe la dirección de tu inmueble en el buscador</Text>
      <GooglePlacesAutocomplete
        textInputProps={{ placeholderTextColor: '#000' }}
        placeholder="Buscar"
        fetchDetails
        styles={{
          textInput: { color: 'black' },
          description: { color: 'black' },
        }}
        GooglePlacesSearchQuery={{
          rankby: 'distance',
        }}
        onPress={(data, details = null) => {
          setCoordinates({
            latitude: details?.geometry.location.lat!,
            longitude: details?.geometry.location.lng!,
          });
          setLocality(details?.address_components[0].short_name!);
        }}
        query={{
          key: 'AIzaSyAd22YBCutdzEZePBY2wbS2OawTZ1_H7-s',
          language: 'es',
          components: 'country:mx',
        }}
      />
      <TextInput placeholder="Calle" />
      <TextInput placeholder="Número exterior" />
      <TextInput placeholder="Número interior" />
      <TextInput placeholder="Código postal" />
      <TextInput placeholder="Ciudad" />
      <TextInput placeholder="Estado" />
      <Text>Mapa</Text>
    </View>
  );
};

export default Ubicacion;

const styles = StyleSheet.create({});
