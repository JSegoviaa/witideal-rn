import firestore from '@react-native-firebase/firestore';

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
    return { status: 'Éxito' };
  } catch (error) {
    console.log('error', error);
    return console.log(error);
  }
};
