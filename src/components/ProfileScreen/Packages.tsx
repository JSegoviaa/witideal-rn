import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Packages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fondo}>
        <Text>Imagen</Text>
        <Text>Witideal</Text>
        <Text>Paquetes</Text>
        <Text>
          Destaca tus inmuebles con nuestra publicidad y vende tus inmuebles más
          rápido
        </Text>
        <TouchableOpacity onPress={() => console.log('')} style={styles.btn}>
          <Text>Agregar paquete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    height: '98%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 15,
  },
  fondo: {
    backgroundColor: 'teal',
  },
  btn: {
    backgroundColor: 'blue',
    padding: 10,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Packages;
