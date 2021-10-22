import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

interface DocumentData {
  [key: string]: any;
}

export const useFavorites = (uid: string) => {
  const [favorites, setFavorites] = useState<DocumentData | null>();
  const [loading, setLoading] = useState(true);

  const getFavorites = async () => {
    try {
      const data = await firestore()
        .collection('production')
        .doc('Users')
        .collection(uid)
        .doc('properties')
        .get();

      setLoading(false);
      data.data()!.favProperties.forEach(snapshot => {
        snapshot.get().then(snap => {
          setFavorites([{ id: snap.id, ...snap.data() }]);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return { favorites, loading };
};
