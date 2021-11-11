import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StackScreenProps } from '@react-navigation/stack';
import { appStyles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { RootSearchStackNavigation } from '../navigation/SearchStackNavigation';
import {
  aparment,
  building,
  condoHouse,
  local,
  office,
  singleHouse,
  terrain,
  warehouse,
} from '../constant/propertyType';
import { buy, rent } from '../constant/action';
import { mxn, usd } from '../constant/currency';

const image = { uri: 'https://i.imgur.com/QxTLA6l.jpg' };

interface Location {
  latitude: number;
  longitude: number;
}

interface Props
  extends StackScreenProps<RootSearchStackNavigation, 'SearchScreen'> {}

const SearchScreen = ({ navigation }: Props) => {
  const { form, onChange } = useForm({
    desde: '',
    hasta: '',
    ubicacion: '',
  });

  const [coordinates, setCoordinates] = useState<Location>({
    longitude: 0,
    latitude: 0,
  });
  const [action, setAction] = useState(rent);
  const [actionSelected, setActionSelected] = useState<Boolean>(false);
  const [currency, setCurrency] = useState(mxn);
  const [propertyType, setPropertyType] = useState(singleHouse);
  const [propertyTypeSelected, setPropertyTypeSelected] =
    useState<Boolean>(false);

  const handleActionTypeSelected = () => {
    setActionSelected(!actionSelected);
    if (!actionSelected) {
      setAction(buy);
    }
    if (actionSelected) {
      setAction(rent);
    }
  };

  const handlePropertyTypeSelected = () => {
    setPropertyTypeSelected(!propertyTypeSelected);
    if (!propertyTypeSelected) {
      setPropertyType(office);
    }
    if (propertyTypeSelected) {
      setPropertyType(singleHouse);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
    });
  }, []);

  console.log(action, 'action');
  console.log(propertyType);
  console.log(currency, 'currency');
  return (
    <ScrollView
      keyboardShouldPersistTaps={'always'}
      nestedScrollEnabled
      contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground source={image} resizeMode="cover">
        <View style={appStyles.container}>
          <Text style={styles.title}>¡Hola! Bievenido a Witideal</Text>

          <View style={styles.card}>
            <View>
              <Text style={styles.subtitle}>¿Qué acción quieres realizar?</Text>

              {/* Botonoes rentar comprar */}
              {!actionSelected ? (
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={styles.btnActivate}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: '700',
                        fontSize: 17,
                      }}>
                      Rentar
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.btnNoActive}
                    onPress={handleActionTypeSelected}>
                    <Text
                      style={{
                        color: '#3f19f9',
                        fontWeight: '700',
                        fontSize: 17,
                      }}>
                      Comprar
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity
                    style={styles.btnNoActive}
                    onPress={handleActionTypeSelected}>
                    <Text
                      style={{
                        color: '#3f19f9',
                        fontWeight: '700',
                        fontSize: 17,
                      }}>
                      Rentar
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnActivate}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: '700',
                        fontSize: 17,
                      }}>
                      Comprar
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            {/* Botonoes habitacional comercial */}
            {!propertyTypeSelected ? (
              <View>
                <Text style={styles.subtitle}>
                  ¿Qué tipo de propiedad te interesa?
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={styles.btnActivate}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: '700',
                        fontSize: 17,
                      }}>
                      Habitacional
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.btnNoActive}
                    onPress={handlePropertyTypeSelected}>
                    <Text
                      style={{
                        color: '#3F19F9',
                        fontWeight: '700',
                        fontSize: 17,
                      }}>
                      Comercial
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.picker}>
                  <Picker
                    selectedValue={propertyType}
                    style={{ color: '#000' }}
                    onValueChange={(itemValue, itemIndex) =>
                      setPropertyType(itemValue)
                    }>
                    <Picker.Item label="Casa" value={singleHouse} />
                    <Picker.Item
                      label="Casa en condominio"
                      value={condoHouse}
                    />
                    <Picker.Item label="Departamento" value={aparment} />
                    <Picker.Item label="Edificio" value={building} />
                    <Picker.Item label="Terreno" value={terrain} />
                  </Picker>
                </View>
              </View>
            ) : (
              <View>
                <Text style={styles.subtitle}>
                  ¿Qué tipo de propiedad te interesa?
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity
                    style={styles.btnNoActive}
                    onPress={handlePropertyTypeSelected}>
                    <Text
                      style={{
                        color: '#3F19F9',
                        fontWeight: '700',
                        fontSize: 17,
                      }}>
                      Habitacional
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnActivate}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: '700',
                        fontSize: 17,
                      }}>
                      Comercial
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.picker}>
                  <Picker
                    selectedValue={propertyType}
                    style={{ color: '#000' }}
                    onValueChange={(itemValue, itemIndex) =>
                      setPropertyType(itemValue)
                    }>
                    <Picker.Item label="Oficina" value={office} />
                    <Picker.Item label="Local" value={local} />
                    <Picker.Item label="Bodega" value={warehouse} />
                  </Picker>
                </View>
              </View>
            )}

            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.subtitle}>¿Cuál es tu presupuesto?</Text>
              <Text style={styles.optional}>Opcional</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                placeholder="Desde"
                placeholderTextColor="#ccc"
                style={styles.input}
                onChangeText={value => onChange(value, 'desde')}
              />
              <TextInput
                placeholder="Hasta"
                placeholderTextColor="#ccc"
                style={styles.input}
                onChangeText={value => onChange(value, 'hasta')}
              />
            </View>
            <View style={styles.picker}>
              <Picker
                selectedValue={currency}
                style={{ color: '#000' }}
                onValueChange={(itemValue, itemIndex) =>
                  setCurrency(itemValue)
                }>
                <Picker.Item label="MXN" value={mxn} />
                <Picker.Item label="USD" value={usd} />
              </Picker>
            </View>
            <View>
              <Text style={styles.subtitle}>¿Dónde te gustaría buscar?</Text>
            </View>
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
                  // console.log(details?.address_components);
                  // console.log(details?.address_components.length);
                  setCoordinates({
                    latitude: details?.geometry.location.lat!,
                    longitude: details?.geometry.location.lng!,
                  });
                }}
                query={{
                  key: 'AIzaSyAd22YBCutdzEZePBY2wbS2OawTZ1_H7-s',
                  language: 'es',
                  components: 'country:mx',
                }}
              />
            </View>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={styles.btnFiltros}>
                <Text
                  style={{ color: '#3F19F9', fontSize: 15 }}
                  onPress={() => {
                    navigation.navigate('PropertiesListScreen');
                  }}>
                  Mostrar inmuebles
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnFiltros}
                onPress={() => {
                  navigation.navigate('PropertiesMapScreen', {
                    latitude: coordinates.latitude,
                    longitude: coordinates.longitude,
                    propertyType,
                    action,
                    currency,
                  });
                }}>
                <Text style={{ color: '#3F19F9', fontSize: 15 }}>
                  Mostrar en el mapa
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ paddingBottom: 20 }}></View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btnActivate: {
    alignItems: 'center',
    backgroundColor: '#3F19F9',
    borderRadius: 50,
    flex: 1,
    padding: 11,
  },
  btnNoActive: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#63C5FA',
    borderRadius: 50,
    borderWidth: 1,
    flex: 1,
    padding: 11,
  },
  btnFiltros: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#63C5FA',
    borderRadius: 50,
    borderWidth: 1,
    flex: 1,
    marginTop: 15,
    padding: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 25,
    elevation: 10,
    padding: 15,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#63C5FA',
    borderRadius: 50,
    borderWidth: 1,
    color: '#000',
    flex: 1,
    height: 40,
    padding: 11,
  },
  optional: {
    marginLeft: 5,
    paddingTop: 15,
  },
  picker: {
    borderColor: '#63C5FA',
    borderRadius: 50,
    borderWidth: 1,
    marginTop: 15,
    color: '#000',
  },
  subtitle: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 10,
  },
  title: {
    color: '#fff',
    fontSize: 27,
    fontWeight: '700',
    padding: 20,
    textAlign: 'center',
    marginVertical: 25,
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

export default SearchScreen;
