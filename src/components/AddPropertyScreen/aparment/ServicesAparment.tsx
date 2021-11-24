import React, { useContext } from 'react';
import { TextInput } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { PropertyContext } from '../../../context/property/PropertyContext';
import { appStyles } from '../../../theme/appTheme';

const ServicesAparment = () => {
  const {
    specificData,
    onChange,
    setElevator,
    setAirConditioner,
    setIsMantainceIncluded,
  } = useContext(PropertyContext);

  return (
    <>
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Elevador"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setElevator(!specificData.elevator);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Aire acondicionado"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setAirConditioner(!specificData.airConditioner);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Mantenimiento incluido (solo renta)"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setIsMantainceIncluded(!specificData.isMantainceIncluded);
        }}
      />
      {specificData.isMantainceIncluded ? (
        <TextInput
          keyboardType="numeric"
          style={appStyles.input}
          placeholder="Costo de mantenimiento"
          onChangeText={value => onChange(value, 'mantainance')}
          placeholderTextColor="#ccc"
        />
      ) : null}
    </>
  );
};

export default ServicesAparment;
