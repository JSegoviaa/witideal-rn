import { Picker } from '@react-native-picker/picker';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { abierta, cerrada } from '../../../constant/kitchen';
import { PropertyContext } from '../../../context/property/PropertyContext';
import { appStyles } from '../../../theme/appTheme';

const CocinaAparment = () => {
  const { onChange, setKitchen, specificData } = useContext(PropertyContext);

  return (
    <>
      <Text style={styles.subtitle}>Cocina</Text>
      <View style={appStyles.picker}>
        <Picker
          selectedValue={specificData.kitchen}
          style={{ color: '#000' }}
          onValueChange={(itemValue, itemIndex) => setKitchen(itemValue)}>
          <Picker.Item label="Abierta" value={abierta} />
          <Picker.Item label="Cerrada" value={cerrada} />
        </Picker>
      </View>
    </>
  );
};

export default CocinaAparment;

const styles = StyleSheet.create({
  subtitle: {
    color: '#1E0E6F',
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 10,
  },
});
