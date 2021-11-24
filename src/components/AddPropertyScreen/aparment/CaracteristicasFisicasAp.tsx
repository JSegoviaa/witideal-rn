import React, { useContext } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { PropertyContext } from '../../../context/property/PropertyContext';
import { exterior, interior } from '../../../constant/locationBuilding';
import { appStyles } from '../../../theme/appTheme';

const CaracteristicasFisicasAp = () => {
  const { onChange, specificData, setLocationInBuilding } =
    useContext(PropertyContext);

  return (
    <View>
      <TextInput
        keyboardType="numeric"
        onChangeText={value => onChange(value, 'm2Build')}
        style={appStyles.input}
        placeholder="M2 construidos"
        placeholderTextColor="#ccc"
      />
      <TextInput
        keyboardType="numeric"
        onChangeText={value => onChange(value, 'totalUnits')}
        style={appStyles.input}
        placeholder="Total de unidades del conjunto"
        placeholderTextColor="#ccc"
      />
      <TextInput
        keyboardType="numeric"
        onChangeText={value => onChange(value, 'totalBuildingFloors')}
        style={appStyles.input}
        placeholder="Niveles del edificio"
        placeholderTextColor="#ccc"
      />
      <TextInput
        keyboardType="numeric"
        onChangeText={value => onChange(value, 'floorNumber')}
        style={appStyles.input}
        placeholder="Nivel en el que se encuentra"
        placeholderTextColor="#ccc"
      />
      <View>
        <Text style={styles.subtitle}>Ubicación en edificio</Text>
        <View style={appStyles.picker}>
          <Picker
            selectedValue={specificData.locationInBuilding}
            style={{ color: '#000' }}
            onValueChange={(itemValue, itemIndex) =>
              setLocationInBuilding(itemValue)
            }>
            <Picker.Item label="Interior" value={interior} />
            <Picker.Item label="Exterior" value={exterior} />
          </Picker>
        </View>
      </View>
    </View>
  );
};

export default CaracteristicasFisicasAp;

const styles = StyleSheet.create({
  subtitle: {
    color: '#1E0E6F',
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 10,
  },
});
