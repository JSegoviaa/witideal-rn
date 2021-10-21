import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

interface DocumentData {
  [key: string]: any;
}

export const useSubscription = (uid: string) => {
  const [subscription, setSubscription] = useState<DocumentData | undefined>();

  const getSubscription = async () => {
    try {
      const data = await firestore()
        .collection('users')
        .doc(uid)
        .collection('subscriptions')
        .get();

      data.forEach(subscription => {
        setSubscription({
          id: subscription.id,
          data: subscription.data().items,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubscription();
  }, [uid]);

  return { subscription };
};
