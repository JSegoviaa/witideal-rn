import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

interface DocumentData {
  [key: string]: any;
}

export const useDestProperties = (uid: string) => {
  const [destProperties, setDestProperties] = useState<DocumentData | null>([]);
  const [loading, setLoading] = useState(true);

  const getDestProperties = async () => {
    try {
      const data = await firestore()
        .collection('production')
        .doc('Users')
        .collection(uid)
        .doc('properties')
        .get();

      setLoading(false);
      data.data()!.destProperties.forEach(snapshot => {
        snapshot.get().then(snap => {
          setDestProperties([{ id: snap.id, ...snap.data() }]);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDestProperties();
  }, []);

  return { destProperties, loading };
};
