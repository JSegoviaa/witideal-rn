import React, { useContext, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Toast from 'react-native-toast-message';
import { buy, rent } from '../../constant/action';
import { mxn, usd } from '../../constant/currency';
import {
  aparment,
  building,
  condoHouse,
  local,
  office,
  singleHouse,
  terrain,
  warehouse,
} from '../../constant/propertyType';
import { appStyles } from '../../theme/appTheme';
import { RootAddPropertyStackNavigation } from '../../navigation/AddPropertyStackNavigation';
import { PropertyContext } from '../../context/property/PropertyContext';

interface Props
  extends StackScreenProps<
    RootAddPropertyStackNavigation,
    'PropertyTypeScreen'
  > {}

const PropertyType = ({ navigation }: Props) => {
  const {
    currency,
    setCurrency,
    propertyType,
    setPropertyType,
    actionSelected,
    setActionSelected,
    sharesCom,
    setSharesCom,
    bankSale,
    setBankSale,
    isCommercial,
    setIsCommercial,
    propertyTypeSelected,
    setPropertyTypeSelected,
    action,
    setAction,
    precio,
    onChange,
  } = useContext(PropertyContext);

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
      setIsCommercial(true);
    }
    if (propertyTypeSelected) {
      setPropertyType(singleHouse);
      setIsCommercial(false);
    }
  };

  const handleNext = () => {
    if (!precio.trim()) {
      Toast.show({
        type: 'error',
        text1: 'El precio es obligatorio',
        text2: 'Inténtelo nuevamente',
      });
    }

    if (precio.trim()) {
      navigation.navigate('UbicationScreen');
    }
  };

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <View style={appStyles.container}>
        <View style={{ paddingTop: 50, paddingBottom: 20 }}>
          <Text style={styles.title}>Anuncio nuevo</Text>
        </View>

        <View>
          <Text style={styles.title}>Selecciona el tipo de opreación</Text>

          {!actionSelected ? (
            <View style={{ paddingVertical: 20 }}>
              <TouchableOpacity style={styles.btnActivate}>
                <Text style={styles.textActive}>Rentar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnNoActive}
                onPress={handleActionTypeSelected}>
                <Text style={styles.textNoActive}>Comprar</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ paddingVertical: 20 }}>
              <TouchableOpacity
                style={styles.btnNoActive}
                onPress={handleActionTypeSelected}>
                <Text style={styles.textNoActive}>Rentar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnActivate}>
                <Text style={styles.textActive}>Comprar</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View>
          <Text style={styles.title}>Selecciona el tipo de inmueble</Text>

          {!propertyTypeSelected ? (
            <>
              <View style={{ paddingVertical: 20 }}>
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
                  <Picker.Item label="Casa en condominio" value={condoHouse} />
                  <Picker.Item label="Departamento" value={aparment} />
                  <Picker.Item label="Edificio" value={building} />
                  <Picker.Item label="Terreno" value={terrain} />
                </Picker>
              </View>
            </>
          ) : (
            <>
              <View style={{ paddingVertical: 20 }}>
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
            </>
          )}
        </View>

        <View style={{ paddingVertical: 30 }}>
          <Text style={styles.title}>Escribe el precio</Text>
          <TextInput
            placeholder="Ingrese el precio de su inmueble"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={value => onChange(value, 'precio')}
          />
          <View style={styles.picker}>
            <Picker
              selectedValue={currency}
              style={{ color: '#000' }}
              onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}>
              <Picker.Item label="MXN" value={mxn} />
              <Picker.Item label="USD" value={usd} />
            </Picker>
          </View>

          <View style={{ paddingVertical: 9 }}>
            <BouncyCheckbox
              size={25}
              fillColor="#3F19F9"
              unfillColor="#FFFFFF"
              text="¿Compartes comisión?"
              iconStyle={{ borderColor: '#3F19F9' }}
              textStyle={{
                fontFamily: 'JosefinSans-Regular',
                textDecorationLine: 'none',
              }}
              onPress={() => {
                setSharesCom(!sharesCom);
              }}
            />
            {actionSelected ? (
              <BouncyCheckbox
                size={25}
                fillColor="#3F19F9"
                unfillColor="#FFFFFF"
                text="¿Es remate bancario?"
                iconStyle={{ borderColor: '#3F19F9' }}
                textStyle={{
                  fontFamily: 'JosefinSans-Regular',
                  textDecorationLine: 'none',
                }}
                onPress={() => {
                  setBankSale(!bankSale);
                }}
              />
            ) : null}
          </View>
        </View>
        <View style={{ paddingBottom: 20 }}>
          <TouchableOpacity onPress={handleNext} style={styles.btnActivate}>
            <Text style={styles.textActive}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default PropertyType;

const styles = StyleSheet.create({
  btnActivate: {
    alignItems: 'center',
    backgroundColor: '#3F19F9',
    borderRadius: 50,
    flex: 1,
    marginVertical: 3,
    padding: 11,
  },
  btnNoActive: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#63C5FA',
    borderRadius: 50,
    borderWidth: 1,
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
    height: 55,
    marginBottom: 10,
    marginTop: 10,
    padding: 11,
  },
  picker: {
    borderColor: '#63C5FA',
    borderRadius: 50,
    borderWidth: 1,
    color: '#000',
  },
  subtitle: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 10,
  },
  textActive: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 17,
  },
  textNoActive: {
    color: '#3f19f9',
    fontWeight: '700',
    fontSize: 17,
  },
  title: {
    color: '#1E0E6F',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});
