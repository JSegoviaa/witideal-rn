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
      const data = await firestore()
        .collection('users')
        .doc(uid)
        .collection('subscriptions')
        .get();

      data.forEach(subscription => {
        setSubscription({
          id: subscription.id,
          data: subscription.data().items,
          end: subscription.data().current_period_end,
          start: subscription.data().current_period_start,
          role: subscription.data().items[0].price.product.metadata
            .firebaseRole,
        });
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubscription();
  }, [uid]);

  return { subscription, loading };
};
