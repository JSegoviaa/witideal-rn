import React, { useContext } from 'react';
import { TextInput } from 'react-native';
import { PropertyContext } from '../../../context/property/PropertyContext';
import { appStyles } from '../../../theme/appTheme';

const EspaciosOffice = () => {
  const { onChange } = useContext(PropertyContext);

  return (
    <>
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

export default EspaciosOffice;
