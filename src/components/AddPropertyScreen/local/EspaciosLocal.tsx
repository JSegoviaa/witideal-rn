import React, { useContext } from 'react';
import { TextInput } from 'react-native';
import { PropertyContext } from '../../../context/property/PropertyContext';
import { appStyles } from '../../../theme/appTheme';

const EspaciosLocal = () => {
  const { onChange } = useContext(PropertyContext);

  return (
    <>
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
    </>
  );
};

export default EspaciosLocal;
