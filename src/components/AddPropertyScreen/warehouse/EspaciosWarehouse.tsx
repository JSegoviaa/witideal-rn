import React, { useContext } from 'react';
import { TextInput, View } from 'react-native';
import { PropertyContext } from '../../../context/property/PropertyContext';
import { appStyles } from '../../../theme/appTheme';

const EspaciosWarehouse = () => {
  const { onChange } = useContext(PropertyContext);

  return (
    <View>
      <TextInput
        keyboardType="numeric"
        onChangeText={value => onChange(value, 'bath')}
        style={appStyles.input}
        placeholder="Baños completos"
        placeholderTextColor="#ccc"
      />
      <TextInput
        keyboardType="numeric"
        onChangeText={value => onChange(value, 'halfBath')}
        style={appStyles.input}
        placeholder="Medio baño"
        placeholderTextColor="#ccc"
      />
      <TextInput
        keyboardType="numeric"
        onChangeText={value => onChange(value, 'parkingSlots')}
        style={appStyles.input}
        placeholder="Estacionamientos"
        placeholderTextColor="#ccc"
      />
    </View>
  );
};

export default EspaciosWarehouse;
