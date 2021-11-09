import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';

export const updateDestProperty = async (
  enabled: boolean,
  propId: string,
  uid: string,
) => {
  try {
    await firestore()
      .collection('production')
      .doc('Users')
      .collection(uid)
      .doc('properties')
      .collection('ownedProperties')
      .doc(propId)
      .update({ isDestProperty: enabled });
    return Toast.show({
      type: 'success',
      text1: 'La propiedad se ha destacado con éxito',
    });
  } catch (error) {
    console.log('error', error);
    return Toast.show({
      type: 'error',
      text1: 'Hubo un error al destacar la propiedad',
      text2: 'Inténtelo nuevamente',
    });
  }
};
