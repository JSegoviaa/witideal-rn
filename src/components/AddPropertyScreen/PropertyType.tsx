import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

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
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="¿Compartes comisión?"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
      </View>
    </>
  );
};

export default PropertyType;

const styles = StyleSheet.create({});
