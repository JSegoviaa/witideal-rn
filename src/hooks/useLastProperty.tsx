import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

interface DocumentData {
  [key: string]: any;
}

export const useLastProperty = (uid: string) => {
  const [lastProperty, setLastProperty] = useState<DocumentData>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const getMyProperties = () => {
    try {
      const data = firestore()
        .collection('production')
        .doc('Users')
        .collection(uid)
        .doc('properties')
        .collection('ownedProperties')
        .orderBy('uploadDate', 'desc')
        .limit(1);

      return data.onSnapshot(querySnapshot => {
        const list: DocumentData = [];
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
        setLastProperty(list);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyProperties();
  }, []);

  return { lastProperty, loading };
};
