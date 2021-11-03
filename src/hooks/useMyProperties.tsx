import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

interface DocumentData {
  [key: string]: any;
}

export const useMyProperties = (uid: string) => {
  const [properties, setProperties] = useState<DocumentData>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const getMyProperties = () => {
    try {
      const data = firestore()
        .collection('production')
        .doc('Users')
        .collection(uid)
        .doc('properties')
        .collection('ownedProperties');
      const list: DocumentData = [];

      return data.onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (doc.exists) {
            const data = doc.data();
            list.push({
              id: doc.id,
              data,
            });
          }
        });
        if (loading) {
          setLoading(false);
        }
        setProperties(list);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyProperties();
  }, []);

  return { properties, loading };
};
