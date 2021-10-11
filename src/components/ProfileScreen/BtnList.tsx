import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';




const BtnList = () => {

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.btn}>Mis pagos</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btn}>Mis favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btn}>Añadir propiedad</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btn}>Editar propiedad</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: 15,
  },
  btn: {
    backgroundColor: 'gray',
    borderColor: 'teal',
    borderRadius: 50,
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 10,
    paddingVertical: 8,
    textAlign: 'center',
    width: 320,
  },
});

export default BtnList;
