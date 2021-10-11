import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PersonalInfo = () => {
  return (
    <View>
      <View>
        <Text style={styles.center}>Aquí va la imagen</Text>
        <Text style={styles.center}>¡Hola!</Text>
        <Text style={styles.center}>Plan RisingStar</Text>
        <Text style={styles.center}>José Manuel Acosta Segovia</Text>
        <Text style={styles.center}>UID: J7idPjx6jVMlYtzQVF3RbfiWre72</Text>
        <Text style={styles.center}>9982626821</Text>
        <Text style={styles.center}>140300177@ucaribe.edu.mx</Text>
        <Text style={styles.center}>Editar perfil</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default PersonalInfo;
