import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import Toast from 'react-native-toast-message';

export const updateProfilePicture = async (uid: string) => {
  try {
    console.log('Hola desde ', uid);
    const reference = storage().ref(`/witideal/${uid}/`);
    const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/`;
    // await reference.putFile(pathToFile);
    return Toast.show({
      type: 'success',
      text1: 'Tu foto de perfil se ha actualizado con éxito',
    });
  } catch (error) {
    console.log(error);
    return Toast.show({
      type: 'error',
      text1: 'Hubo al subir tu foto de perfil',
      text2: 'Inténtelo nuevamente',
    });
  }
};
