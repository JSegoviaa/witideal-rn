import firestore from '@react-native-firebase/firestore';

export const toggleEnable = async (
  enabled: boolean,
  propId: string,
  uId: string,
) => {
  try {
    await firestore()
      .doc(`production/Users/${uId}/properties/ownedProperties/${propId}`)
      .update({ isEnabled: enabled });
    return { status: 'Éxito' };
  } catch (error) {
    console.log('error', error);
    return console.log(error);
  }
};
