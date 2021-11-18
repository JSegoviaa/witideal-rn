import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const PropertyType = () => {
  return (
    <>
      <View>
        <Text>Anuncio nuevo</Text>
      </View>
      <View>
        <Text>Selecciona el tipo de opreación</Text>

        <TouchableOpacity>
          <Text>Rentar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Vender</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Selecciona el tipo de inmueble</Text>
        <TouchableOpacity>
          <Text>Habitacional</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Comercial</Text>
        </TouchableOpacity>

        <Text>Selecciona una opción</Text>
      </View>

      <View>
        <Text>Escribe el precio</Text>
        <TextInput placeholder="Precio" />
        <Text>MXN</Text>
        <Text>USD</Text>
      </View>
    </>
  );
};

export default PropertyType;

const styles = StyleSheet.create({});
