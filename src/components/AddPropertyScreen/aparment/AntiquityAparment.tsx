import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { appStyles } from '../../../theme/appTheme';
import { PropertyContext } from '../../../context/property/PropertyContext';

const AntiquityAparment = () => {
  const { specificData, setAntiquity } = useContext(PropertyContext);

  return (
    <>
      <Text style={styles.subtitle}>Antigüedad (años)</Text>
      <View style={appStyles.picker}>
        <Picker
          selectedValue={specificData.antiquity}
          style={{ color: '#000' }}
          onValueChange={(itemValue, itemIndex) => setAntiquity(itemValue)}>
          <Picker.Item label="0-5" value="0-5" />
          <Picker.Item label="5-10" value="5-10" />
          <Picker.Item label="10-25" value="10-25" />
          <Picker.Item label="25+" value="25+" />
        </Picker>
      </View>
    </>
  );
};

export default AntiquityAparment;

const styles = StyleSheet.create({
  subtitle: {
    color: '#1E0E6F',
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 10,
  },
});
