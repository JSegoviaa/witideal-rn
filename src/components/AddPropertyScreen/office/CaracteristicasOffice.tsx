import React, { useContext } from 'react';
import { TextInput } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { PropertyContext } from '../../../context/property/PropertyContext';
import { appStyles } from '../../../theme/appTheme';

const CaracteristicasOffice = () => {
  const { setCellar, specificData, onChange } = useContext(PropertyContext);

  return (
    <>
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Bodega"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setCellar(!specificData.cellar);
        }}
      />

      <TextInput
        keyboardType="numeric"
        onChangeText={value => onChange(value, 'privateOffice')}
        style={appStyles.input}
        placeholder="Oficinas privadas"
        placeholderTextColor="#ccc"
      />
    </>
  );
};

export default CaracteristicasOffice;
