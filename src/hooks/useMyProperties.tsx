import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

interface DocumentData {
  [key: string]: any;
}

export const useMyProperties = (uid: string) => {
  const [properties, setProperties] = useState<DocumentData | null>();
  const [loading, setLoading] = useState(true);

  const getProperties = async () => {
    const data = await firestore()
      .collection('production')
      .doc('Users')
      .collection(uid)
      .doc('properties')
      .collection('ownedProperties')
      .get();
    setLoading(false);

    console.log(data);
  };
  useEffect(() => {
    getProperties();
  }, []);

  return { properties, loading };
};
