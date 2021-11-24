import React, { useContext } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { PropertyContext } from '../../../context/property/PropertyContext';

const ServicesHouse = () => {
  const { specificData, setAirConditioner } = useContext(PropertyContext);

  return (
    <>
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
    </>
  );
};

export default ServicesHouse;
