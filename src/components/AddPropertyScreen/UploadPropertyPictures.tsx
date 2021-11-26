import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { StackScreenProps } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import { PropertyContext } from '../../context/property/PropertyContext';
import { appStyles } from '../../theme/appTheme';
import { RootAddPropertyStackNavigation } from '../../navigation/AddPropertyStackNavigation';

interface Props
  extends StackScreenProps<RootAddPropertyStackNavigation, 'SummaryScreen'> {}

const UploadPropertyPictures = ({ navigation }: Props) => {
  const {
    tempUri,
    setTempUri,
    setFileName,
    tempUris,
    setTempUris,
    setFileNames,
  } = useContext(PropertyContext);

  const takePhotoFromGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      resp => {
        if (resp.didCancel) return;
        if (!resp.assets![0].uri) return;
        setTempUri(resp.assets![0].uri);
        setFileName(resp.assets![0].fileName!);
      },
    );
  };

  const takePhotosFromGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        selectionLimit: 30,
      },
      resp => {
        if (resp.didCancel) return;
        if (!resp.assets![0].uri) return;
        if (resp.assets!.length > 30) {
          Toast.show({
            type: 'error',
            text1: 'Seleecionaste más de 30 imágenes',
            text2: 'Inténtelo nuevamente',
          });
        }
        setTempUris(resp.assets?.map(asset => asset.uri));
        setFileNames(resp.assets?.map(asset => asset.fileName));
      },
    );
  };

  const handleNext = () => {
    if (tempUri == '') {
      return Toast.show({
        type: 'error',
        text1: 'Aún no has seleccionado ninguna imagen',
        text2: 'Inténtelo nuevamente',
      });
    }
    if (tempUri !== '') {
      navigation.navigate('SummaryScreen');
    }
  };

  return (
    <View style={appStyles.container}>
      <View>
        <Text style={styles.subtitle}>Foto principal</Text>
        <TouchableOpacity
          style={styles.background}
          onPress={takePhotoFromGallery}>
          <Text style={styles.subtitle}>
            Selecciona la imagen principal de tu inmueble
          </Text>
          <Text style={styles.text}>Solo se subir una foto (obligatorio)</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.subtitle}>Fotos del inmueble</Text>
        <TouchableOpacity
          style={styles.background}
          onPress={takePhotosFromGallery}>
          <Text style={styles.subtitle}>
            Selcciona las fotos que quieres mostrar en tu inmueble
          </Text>
          <Text style={styles.text}>
            Máximo 30 fotos.
            {tempUris?.length! <= 30
              ? ` Haz seleccionado ${tempUris?.length}`
              : null}
          </Text>
        </TouchableOpacity>
      </View>

      {tempUris?.length! <= 30 ? (
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={handleNext} style={appStyles.btnPrimary}>
            <Text
              style={{
                color: '#fff',
                fontSize: 17,
                fontWeight: '700',
                textAlign: 'center',
              }}>
              Continuar
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
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
