import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const UploadPropertyPictures = () => {
  return (
    <View>
      <View>
        <Text>Foto principal</Text>
        <TouchableOpacity>
          <Text>Selecciona la imagen principal de tu inmueble</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Fotos del inmueble</Text>
        <TouchableOpacity>
          <Text>Selcciona las fotos que quieres mostrar en tu inmueble</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadPropertyPictures;

const styles = StyleSheet.create({});
