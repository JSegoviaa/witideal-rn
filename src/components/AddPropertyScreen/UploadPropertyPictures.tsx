import React, { useContext } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { StackScreenProps } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import Carousel from 'react-native-snap-carousel';
import { PropertyContext } from '../../context/property/PropertyContext';
import { appStyles } from '../../theme/appTheme';
import { RootAddPropertyStackNavigation } from '../../navigation/AddPropertyStackNavigation';
import CarouselPictures from './CarouselPictures';
import { useLastProperty } from '../../hooks/useLastProperty';
import { AuthContext } from '../../context/auth/AuthContext';

interface Props
  extends StackScreenProps<RootAddPropertyStackNavigation, 'SummaryScreen'> {}

const UploadPropertyPictures = ({ navigation }: Props) => {
  const { width } = useWindowDimensions();
  const { user } = useContext(AuthContext);
  const { lastProperty } = useLastProperty(user?.uid!);

  const {
    tempUri,
    setTempUri,
    setFileName,
    tempUris,
    setTempUris,
    uploadPicture,
    uploadPictures,
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
      uploadPicture(lastProperty[0].id);
      uploadPictures(lastProperty[0].id);
      navigation.navigate('SummaryScreen');
    }
  };

  return (
    <ScrollView>
      <View style={appStyles.container}>
        <View>
          <Text style={styles.subtitle}>Foto principal</Text>
          <View style={{ paddingBottom: 15 }}>
            {tempUri !== '' ? (
              <Image
                resizeMode="contain"
                style={{ width: width * 0.9, height: 230, borderRadius: 5 }}
                source={{ uri: tempUri }}
              />
            ) : null}
          </View>
          <TouchableOpacity
            style={styles.background}
            onPress={takePhotoFromGallery}>
            <Text style={styles.subtitle}>
              Selecciona la imagen principal de tu inmueble
            </Text>
            <Text style={styles.text}>
              Solo se puede subir una foto (obligatorio)
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.subtitle}>Fotos del inmueble</Text>

          {tempUris?.length! > 0 && tempUris?.length! <= 30 ? (
            <Carousel
              data={tempUris!}
              renderItem={({ item }: any) => <CarouselPictures item={item} />}
              sliderWidth={width}
              itemWidth={width}
              inactiveSlideOpacity={0.8}
            />
          ) : null}

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
    </ScrollView>
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
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
  },
});
