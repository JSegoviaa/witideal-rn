import React, { useContext } from 'react';
import { TextInput } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { PropertyContext } from '../../../context/property/PropertyContext';
import { appStyles } from '../../../theme/appTheme';

const ServicesTerrain = () => {
  const { specificData, setElectricity, setWater, onChange } =
    useContext(PropertyContext);

  return (
    <>
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Electricidad"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setElectricity(!specificData.electricity);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Agua"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setWater(!specificData.water);
        }}
      />
      <TextInput
        onChangeText={value => onChange(value, 'landUseCode')}
        style={appStyles.input}
        placeholder="Uso de suelo"
        placeholderTextColor="#ccc"
      />
    </>
  );
};

export default ServicesTerrain;
