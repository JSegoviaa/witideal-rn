import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { appStyles } from '../../../theme/appTheme';
import { PropertyContext } from '../../../context/property/PropertyContext';
import { abierta, cerrada } from '../../../constant/kitchen';

const CocinaCondo = () => {
  const { specificData, setKitchen } = useContext(PropertyContext);

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

export default CocinaCondo;

const styles = StyleSheet.create({
  subtitle: {
    color: '#1E0E6F',
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 10,
  },
});
