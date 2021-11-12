import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm } from '../../hooks/useForm';

const Filters = () => {
  const { form, onChange } = useForm({
    desde: '',
    hasta: '',
    niveles: 0,
  });

  const [conservacion, setConservacion] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Personaliza tu búsqueda</Text>

        <Text style={styles.subtitle}>Cantidad de habitaciones</Text>
        <TextInput
          placeholder="Habitaciones"
          placeholderTextColor="#ccc"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'niveles')}
        />
        <Text style={styles.subtitle}>Cantidad de baños</Text>
        <TextInput
          placeholder="Baños"
          placeholderTextColor="#ccc"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'niveles')}
        />
        <Text style={styles.subtitle}>Pet Friendly</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={conservacion}
            style={{ color: '#000' }}
            onValueChange={(itemValue, itemIndex) =>
              setConservacion(itemValue)
            }>
            <Picker.Item label="Sí" value={true} />
            <Picker.Item label="No" value={false} />
          </Picker>
        </View>
        <Text style={styles.subtitle}>Estado de conservación del inmueble</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={conservacion}
            style={{ color: '#000' }}
            onValueChange={(itemValue, itemIndex) =>
              setConservacion(itemValue)
            }>
            <Picker.Item label="Excelente" value="excelente" />
            <Picker.Item label="Bueno" value="bueno" />
            <Picker.Item label="Regular" value="regular" />
            <Picker.Item label="Remodelar" value="remodelar" />
          </Picker>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F7FC',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#F9F7FC',
    borderColor: '#63C5FA',
    borderRadius: 50,
    borderWidth: 1,
    color: '#000',
    flex: 1,
    height: 40,
    padding: 11,
  },
  picker: {
    borderColor: '#63C5FA',
    borderRadius: 50,
    borderWidth: 1,
    marginTop: 15,
  },
  title: {
    color: '#1E0E6F',
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    color: '#1e0e6f',
    fontSize: 16,
    fontWeight: '700',
    paddingTop: 10,
  },
});

export default Filters;
