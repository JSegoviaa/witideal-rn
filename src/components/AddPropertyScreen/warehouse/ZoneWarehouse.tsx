import React, { useContext } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { PropertyContext } from '../../../context/property/PropertyContext';

const ZoneWarehouse = () => {
  const { specificData, setInsideIndust } = useContext(PropertyContext);

  return (
    <>
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="En parque industrial"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setInsideIndust(!specificData.insideIndust);
        }}
      />
    </>
  );
};

export default ZoneWarehouse;
