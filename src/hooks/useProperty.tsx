import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

interface DocumentData {
  [key: string]: any;
}

export const useProperty = (
  id: string,
  action: string,
  propertyType: string,
) => {
  const [property, setProperty] = useState<DocumentData>();
  const [loading, setLoading] = useState(true);

  const getProperty = async () => {
    try {
      const data = await firestore()
        .collection('production')
        .doc('witideal')
        .collection('genders')
        .doc(propertyType)
        .collection(action)
        .doc(id)
        .get();

      setLoading(false);
      if (data.data()) {
        setProperty(data.data());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperty();
  }, []);

  return { property, loading };
};
