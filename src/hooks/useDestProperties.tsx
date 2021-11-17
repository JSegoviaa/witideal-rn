import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

interface DocumentData {
  [key: string]: any;
}

export const useDestProperties = (uid: string) => {
  const [destProperties, setDestProperties] = useState<DocumentData>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const getMyDestProperties = () => {
    try {
      const data = firestore()
        .collection('production')
        .doc('Users')
        .collection(uid)
        .doc('properties')
        .collection('ownedProperties')
        .where('isDestProperty', '==', true);
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
        setDestProperties(list);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyDestProperties();
  }, []);

  return { destProperties, loading };
};
