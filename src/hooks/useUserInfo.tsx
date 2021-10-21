import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

interface DocumentData {
  [key: string]: any;
}

export const useUserInfo = (uid: string) => {
  const [userInfo, setUserInfo] = useState<DocumentData | undefined>();

  const getData = async () => {
    try {
      const data = await firestore()
        .collection('production')
        .doc('Users')
        .collection(uid)
        .doc('generalInfo')
        .get();
      if (data.data()) {
        setUserInfo(data.data());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { userInfo };
};
