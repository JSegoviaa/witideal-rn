import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';
import { updateProfilePicture } from '../helpers/updateProfilePic';
import { AuthContext } from '../context/auth/AuthContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootProfileStackNavigation } from '../navigation/ProfileStackNavigation';

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

  const backToProfile = () => navigation.push('ProfileScreen');

  return (
    <SafeAreaView>
      <View style={{ marginTop: 50 }}>
        <Text>asfasdf</Text>
      </View>

      <View>
        <TouchableOpacity>
          <Text onPress={takePhotoFromGallery}>
            Subir imagen desde la galería{' '}
            <Icon name="image" size={20} color="#3F19F9" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>
            Tomar foto con la cámara{' '}
            <Icon name="camera" size={20} color="#3F19F9" />
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={backToProfile}>
          <Text>Regresar al perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditProfilePicScreen;

const styles = StyleSheet.create({});
