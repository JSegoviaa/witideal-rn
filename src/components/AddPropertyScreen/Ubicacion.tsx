import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Toast from 'react-native-toast-message';
import { useForm } from '../../hooks/useForm';

interface Location {
  latitude: number;
  longitude: number;
}

const Ubicacion = () => {
  const [administrative_area_level_1, setAdministrative_area_level_1] =
    useState('');
  const [coordinates, setCoordinates] = useState<Location>({
    longitude: 0,
    latitude: 0,
  });
  const [country, setCountry] = useState('');
  const [locality, setLocality] = useState('');
  const [isExactLoaction, setIsExactLoaction] = useState<Boolean>(false);

  const { form, onChange } = useForm({
    int_number: '',
    ext_number: '',
    postal_code: '',
    route: '',
  });

  return (
    <View>
      <Text style={styles.title}>
        Escribe la dirección de tu inmueble en el buscador
      </Text>
      <View style={styles.ubicacion}>
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
            console.log(JSON.stringify(details?.address_components, null, 3));
            setCoordinates({
              latitude: details?.geometry.location.lat!,
              longitude: details?.geometry.location.lng!,
            });
            setCountry(details?.address_components[2].short_name!);
            setLocality(details?.address_components[0].short_name!);
            setAdministrative_area_level_1(
              details?.address_components[1].short_name!,
            );
          }}
          query={{
            key: 'AIzaSyAd22YBCutdzEZePBY2wbS2OawTZ1_H7-s',
            language: 'es',
            components: 'country:mx',
          }}
        />
      </View>

      <View style={{ paddingVertical: 9 }}>
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Ubicación exacta"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={() => {
            setIsExactLoaction(!isExactLoaction);
          }}
        />
      </View>
      {locality ? (
        <>
          <TextInput
            placeholder="Calle"
            placeholderTextColor="#ccc"
            style={styles.input}
            onChangeText={value => onChange(value, 'route')}
          />
          <TextInput
            placeholder="Número exterior"
            placeholderTextColor="#ccc"
            style={styles.input}
            onChangeText={value => onChange(value, 'ext_number')}
          />
          <TextInput
            placeholder="Número interior"
            placeholderTextColor="#ccc"
            style={styles.input}
            onChangeText={value => onChange(value, 'int_number')}
          />
          <TextInput
            placeholder="Código postal"
            placeholderTextColor="#ccc"
            style={styles.input}
            onChangeText={value => onChange(value, 'postal_code')}
          />
          <TextInput
            placeholder="Ciudad"
            placeholderTextColor="#ccc"
            style={styles.input}
            onChangeText={value => onChange(value, 'route')}
            value={locality}
          />
          <TextInput
            placeholder="Esetado"
            placeholderTextColor="#ccc"
            style={styles.input}
            onChangeText={value => onChange(value, 'route')}
            value={administrative_area_level_1}
          />
          <Text>Mapa</Text>
        </>
      ) : null}
    </View>
  );
};

export default Ubicacion;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderColor: '#63C5FA',
    borderRadius: 50,
    borderWidth: 1,
    color: '#000',
    flex: 1,
    height: 50,
    padding: 11,
    marginVertical: 3,
  },
  title: {
    color: '#1E0E6F',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  ubicacion: {
    backgroundColor: '#fff',
    borderColor: '#CED4DA',
    borderRadius: 3,
    borderWidth: 1,
    color: '#000',
    marginRight: 10,
    width: '100%',
  },
});
