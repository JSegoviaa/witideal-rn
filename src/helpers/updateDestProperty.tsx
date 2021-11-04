import firestore from '@react-native-firebase/firestore';

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
    return { status: 'Éxito' };
  } catch (error) {
    console.log('error', error);
  }
};
