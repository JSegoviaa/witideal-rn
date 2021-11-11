import React, { useContext, useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { updateProfilePicture } from '../helpers/updateProfilePic';
import { AuthContext } from '../context/auth/AuthContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootProfileStackNavigation } from '../navigation/ProfileStackNavigation';
import { appStyles } from '../theme/appTheme';

interface Props
  extends StackScreenProps<
    RootProfileStackNavigation,
    'EditProfilePicScreen'
  > {}

const EditProfilePicScreen = ({ navigation }: Props) => {
  const [tempUri, setTempUri] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const { user } = useContext(AuthContext);

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
        updateProfilePicture(tempUri, 'thumb@1100_' + fileName, user?.uid!);
      },
    );
  };
  const takePhotoFromCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      resp => {
        if (resp.didCancel) return;
        if (!resp.assets![0].uri) return;
        setTempUri(resp.assets![0].uri);
        setFileName(resp.assets![0].fileName!);
        updateProfilePicture(tempUri, 'thumb@1100_' + fileName, user?.uid!);
      },
    );
  };

  const backToProfile = () => navigation.push('ProfileScreen');

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <View style={appStyles.logoContainer}>
        <Image
          style={appStyles.logo}
          source={require('../assets/logo-brand.png')}
        />
      </View>

      <View style={{ paddingVertical: 20 }}>
        <Text style={styles.title}>Elige tu foto de perfil</Text>
      </View>

      <View style={{ paddingVertical: 10 }}>
        <TouchableOpacity
          style={appStyles.btnSecondary}
          onPress={takePhotoFromGallery}>
          <Text style={styles.btn}>
            Subir foto desde la galería{' '}
            <Icon name="image" size={20} color="#3F19F9" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingVertical: 10 }}>
        <TouchableOpacity
          style={appStyles.btnSecondary}
          onPress={takePhotoFromCamera}>
          <Text style={styles.btn}>
            Tomar foto con la cámara{' '}
            <Icon name="camera" size={20} color="#3F19F9" />
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={backToProfile} style={appStyles.btnPrimary}>
          <Text style={styles.text}>Regresar al perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  btn: { textAlign: 'center', color: '#000', fontSize: 16 },
});
export default EditProfilePicScreen;
