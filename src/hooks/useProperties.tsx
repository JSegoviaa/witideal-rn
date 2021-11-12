import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

interface DocumentData {
  [key: string]: any;
}

export const useProperties = (
  propertyType: string,
  action: string,
  currency: string,
  isCommercial: boolean,
  locality: string,
) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [properties, setProperties] = useState<DocumentData>([]);

  const getProperties = () => {
    try {
      const data = firestore()
        .collection('production')
        .doc('witideal')
        .collection('genders')
        .doc(propertyType)
        .collection(action)
        .where('currency', '==', currency)
        .where('isCommercial', '==', isCommercial)
        .where('locality', '==', locality)
        .where('isEnabled', '==', true)
        .where('isExactLocation', '==', true);

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
    getProperties();
  }, []);

  return { loading, properties };
};
