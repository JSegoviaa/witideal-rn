import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';

export const updateProfilePicture = async (
  uri: string,
  fileName: string,
  uid: string,
) => {
  try {
    if (fileName) {
      await storage().ref(`witideal/${uid}/${fileName}`).putFile(uri);

      const photo = await storage()
        .ref(`witideal/${uid}/${fileName}`)
        .getDownloadURL();

      await firestore()
        .collection('production')
        .doc('Users')
        .collection(uid)
        .doc('generalInfo')
        .update({ photo });

      return Toast.show({
        type: 'success',
        text1: 'Tu foto de perfil se ha actualizado con éxito',
      });
    }
  } catch (error) {
    console.log(error);
    return Toast.show({
      type: 'error',
      text1: 'Hubo al subir tu foto de perfil',
      text2: 'Inténtelo nuevamente',
    });
  }
};
