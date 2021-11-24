import React, { useContext } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { PropertyContext } from '../../../context/property/PropertyContext';

const ZoneLocal = () => {
  const { specificData, setInsideMall, setOnstreet } =
    useContext(PropertyContext);
  return (
    <>
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="En centro comercial"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setInsideMall(!specificData.insideMall);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="A pie de calle"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setOnstreet(!specificData.onstreet);
        }}
      />
    </>
  );
};

export default ZoneLocal;
