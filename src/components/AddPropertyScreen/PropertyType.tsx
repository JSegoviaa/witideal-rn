import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
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
import { useForm } from '../../hooks/useForm';

const PropertyType = () => {
  const { form, onChange } = useForm({
    precio: 0,
  });

  const [action, setAction] = useState<String>(rent);
  const [actionSelected, setActionSelected] = useState<Boolean>(false);
  const [currency, setCurrency] = useState<String>(mxn);
  const [isCommercial, setIsCommercial] = useState<Boolean>(false);
  const [propertyType, setPropertyType] = useState(singleHouse);
  const [propertyTypeSelected, setPropertyTypeSelected] =
    useState<Boolean>(false);
  const [shareComission, setShareComission] = useState<Boolean>(false);
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

  return (
    <>
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
              setShareComission(!shareComission);
            }}
          />
        </View>
      </View>
    </>
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
