import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

interface DocumentData {
  [key: string]: any;
}

export const useMyProperties = (uid: string) => {
  const [properties, setProperties] = useState<DocumentData>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const getMyProperties = () => {
    const data = firestore()
      .collection('production')
      .doc('Users')
      .collection(uid)
      .doc('properties')
      .collection('ownedProperties');
    const list: DocumentData = [];

    return data.onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = doc.data();
        list.push({
          id: doc.id,
          data,
        });
      });
      if (loading) {
        setLoading(false);
      }
      setProperties(list);
    });
  };
  useEffect(() => {
    getMyProperties();
  }, []);

  return { properties, loading };
};
