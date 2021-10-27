import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

interface DocumentData {
  [key: string]: any;
}

export const useSubscription = (uid: string) => {
  const [subscription, setSubscription] = useState<DocumentData | undefined>();
  const [loading, setLoading] = useState(true);

  const getSubscription = async () => {
    const data = firestore()
      .collection('users')
      .doc(uid)
      .collection('subscriptions');

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
      setSubscription(list);
    });
  };

  useEffect(() => {
    getSubscription();
  }, [uid]);

  return { subscription, loading };
};
