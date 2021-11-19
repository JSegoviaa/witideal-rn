import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const UploadPropertyPictures = () => {
  const [tempUri, setTempUri] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');

  const takePhotoFromGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      resp => {
        if (resp.didCancel) return;
        if (!resp.assets![0].uri) return;
        setTempUri(resp.assets![0].uri);
        setFileName(resp.assets![0].fileName!);
      },
    );
  };

  return (
    <View>
      <View>
        <Text style={styles.subtitle}>Foto principal</Text>
        <TouchableOpacity
          style={styles.background}
          onPress={takePhotoFromGallery}>
          <Text style={styles.subtitle}>
            Selecciona la imagen principal de tu inmueble
          </Text>
          <Text style={styles.text}>Solo se subir una foto</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.subtitle}>Fotos del inmueble</Text>
        <TouchableOpacity
          style={styles.background}
          onPress={takePhotoFromGallery}>
          <Text style={styles.subtitle}>
            Selcciona las fotos que quieres mostrar en tu inmueble
          </Text>
          <Text style={styles.text}>Máximo 30 fotos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadPropertyPictures;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#E0D7EE',
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'dotted',
  },
  subtitle: {
    color: '#1E0E6F',
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 10,
    textAlign: 'center',
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
  },
});
