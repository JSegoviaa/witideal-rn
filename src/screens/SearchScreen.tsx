import React, { useState } from 'react';
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
import { appStyles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import Filters from '../components/SearchScreen.tsx/Filters';

const image = { uri: 'https://i.imgur.com/QxTLA6l.jpg' };

const SearchScreen = () => {
  const { form, onChange } = useForm({
    desde: '',
    hasta: '',
    ubicacion: '',
  });

  const [propertyType, setPropertyType] = useState();
  const [currency, setCurrency] = useState();
  const [showFilters, setShowFilters] = useState<Boolean>(false);
  const [actionSelected, setActionSelected] = useState<Boolean>(false);
  const [propertyTypeSelected, setPropertyTypeSelected] =
    useState<Boolean>(false);

  const handleFilters = () => setShowFilters(!showFilters);
  const handleActionTypeSelected = () => setActionSelected(!actionSelected);
  const handlePropertyTypeSelected = () =>
    setPropertyTypeSelected(!propertyTypeSelected);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                    onValueChange={(itemValue, itemIndex) =>
                      setPropertyType(itemValue)
                    }>
                    <Picker.Item label="Casa" value="casa" />
                    <Picker.Item
                      label="Casa en condominio"
                      value="casa-condominio"
                    />
                    <Picker.Item label="Departamento" value="departamento" />
                    <Picker.Item label="Edificio" value="edificio" />
                    <Picker.Item label="Terreno" value="terreno" />
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
                    onValueChange={(itemValue, itemIndex) =>
                      setPropertyType(itemValue)
                    }>
                    <Picker.Item label="Casa" value="casa" />
                    <Picker.Item
                      label="Casa en condominio"
                      value="casa-condominio"
                    />
                    <Picker.Item label="Departamento" value="departamento" />
                    <Picker.Item label="Edificio" value="edificio" />
                    <Picker.Item label="Terreno" value="terreno" />
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
                style={styles.input}
                onChangeText={value => onChange(value, 'desde')}
              />
              <TextInput
                placeholder="Hasta"
                style={styles.input}
                onChangeText={value => onChange(value, 'hasta')}
              />
            </View>
            <View style={styles.picker}>
              <Picker
                selectedValue={currency}
                onValueChange={(itemValue, itemIndex) =>
                  setCurrency(itemValue)
                }>
                <Picker.Item label="MXN" value="mxn" />
                <Picker.Item label="USD" value="usd" />
              </Picker>
            </View>
            <View>
              <Text style={styles.subtitle}>¿Dónde te gustaría buscar?</Text>
            </View>
            <View>
              <TextInput
                placeholder="Ubicación"
                style={styles.ubicacion}
                onChangeText={value => onChange(value, 'ubicacion')}
              />
            </View>
            {showFilters && <Filters />}

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={styles.btnFiltros}
                onPress={handleFilters}>
                <Text style={{ color: '#3F19F9', fontSize: 15 }}>
                  Agregar más filtros
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnFiltros}>
                <Text style={{ color: '#3F19F9', fontSize: 15 }}>
                  Mostrar inmuebles
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
  },
  ubicacion: {
    backgroundColor: '#fff',
    borderColor: '#CED4DA',
    borderRadius: 3,
    borderWidth: 1,
    height: 40,
    marginRight: 10,
    padding: 11,
    textAlign: 'center',
    width: '100%',
  },
});

export default SearchScreen;
