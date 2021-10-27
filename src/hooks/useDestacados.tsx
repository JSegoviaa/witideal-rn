import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

interface DocumentData {
  [key: string]: any;
}

export const useDestacados = () => {
  const [allDestacados, setAllDestacados] = useState<DocumentData>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const getDestacados = async () => {
    try {
      const data = firestore().collection('destProperties');
      const list: DocumentData = [];
      data.onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = doc.data();
          list.push({
            id: doc.id,
            data,
          });
        });
      });
      setLoading(false);
      setAllDestacados(list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDestacados();
  }, []);

  return { allDestacados, loading };
};
