import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';

export const deleteProperty = async (
  propertyType: string,
  action: string,
  id: string,
) => {
  try {
    await firestore()
      .collection('production')
      .doc('witideal')
      .collection('genders')
      .doc(propertyType)
      .collection(action)
      .doc(id)
      .delete();
    return Toast.show({
      type: 'error',
      text1: 'La propiedad se ha eliminado con éxito',
    });
  } catch (error) {
    console.log('error', error);
    return Toast.show({
      type: 'error',
      text1: 'Hubo un error al eliminar',
      text2: 'Inténtelo nuevamente',
    });
  }
};

export const deleteMyProperty = async (id: string, uid: string) => {
  try {
    await firestore()
      .collection('production')
      .doc('Users')
      .collection(uid)
      .doc('properties')
      .collection('ownedProperties')
      .doc(id)
      .delete();
    return { status: 'Éxito' };
  } catch (error) {
    console.log('error', error);
    return console.log(error);
  }
};
