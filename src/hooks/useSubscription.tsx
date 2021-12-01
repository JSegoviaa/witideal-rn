import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

interface DocumentData {
  [key: string]: any;
}

export const useSubscription = (uid: string) => {
  const [subscription, setSubscription] = useState<DocumentData | undefined>();
  const [loading, setLoading] = useState(true);

  const getSubscription = async () => {
    try {
      const data = firestore()
        .collection('users')
        .doc(uid)
        .collection('subscriptions');

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
        setSubscription(list);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubscription();
  }, [uid]);

  return { subscription, loading };
};
