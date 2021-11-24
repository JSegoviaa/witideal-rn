import React, { useContext } from 'react';
import { TextInput, View } from 'react-native';
import { PropertyContext } from '../../../context/property/PropertyContext';
import { appStyles } from '../../../theme/appTheme';

const CaracteristicasFisicasHouse = () => {
  const { onChange } = useContext(PropertyContext);
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
        onChangeText={value => onChange(value, 'm2Terrain')}
        style={appStyles.input}
        placeholder="M2 del terreno"
        placeholderTextColor="#ccc"
      />
      <TextInput
        keyboardType="numeric"
        onChangeText={value => onChange(value, 'floors')}
        style={appStyles.input}
        placeholder="Niveles construidos"
        placeholderTextColor="#ccc"
      />
    </View>
  );
};

export default CaracteristicasFisicasHouse;
