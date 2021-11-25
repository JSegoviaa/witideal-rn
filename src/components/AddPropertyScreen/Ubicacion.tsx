import React, { useContext } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Toast from 'react-native-toast-message';
import { RootAddPropertyStackNavigation } from '../../navigation/AddPropertyStackNavigation';
import { appStyles } from '../../theme/appTheme';
import { PropertyContext } from '../../context/property/PropertyContext';

interface Props
  extends StackScreenProps<RootAddPropertyStackNavigation, 'UbicationScreen'> {}

const Ubicacion = ({ navigation }: Props) => {
  const {
    coordinates,
    setCoordinates,
    administrative_area_level_1,
    setAdministrative_area_level_1,
    setCountry,
    locality,
    setLocality,
    isExactLoaction,
    setIsExactLoaction,
    onChange,
  } = useContext(PropertyContext);

  const handleNext = () => {
    if (!coordinates.latitude) {
      Toast.show({
        type: 'error',
        text1: 'Elija un lugar',
        text2: 'Inténtelo nuevamente',
      });
    }

    if (coordinates.latitude) {
      navigation.navigate('AddPropertyMapScreen', {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      });
    }
  };

  return (
    <ScrollView keyboardShouldPersistTaps={'always'} nestedScrollEnabled>
      <View style={appStyles.container}>
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
            isChecked={isExactLoaction}
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
              keyboardType="numeric"
              placeholderTextColor="#ccc"
              style={styles.input}
              onChangeText={value => onChange(value, 'ext_number')}
            />
            <TextInput
              placeholder="Número interior"
              keyboardType="numeric"
              placeholderTextColor="#ccc"
              style={styles.input}
              onChangeText={value => onChange(value, 'int_number')}
            />
            <TextInput
              placeholder="Código postal"
              keyboardType="numeric"
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
          </>
        ) : null}

        <TouchableOpacity onPress={handleNext} style={styles.btnActivate}>
          <Text style={styles.textActive}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Ubicacion;

const styles = StyleSheet.create({
  btnActivate: {
    alignItems: 'center',
    backgroundColor: '#3F19F9',
    borderRadius: 50,
    flex: 1,
    marginVertical: 3,
    padding: 11,
  },
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
  textActive: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 17,
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
