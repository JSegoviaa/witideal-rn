import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

interface DocumentData {
  [key: string]: any;
}

export const useRole = (uid: string) => {
  const [role, setRole] = useState<DocumentData>();
  const [loading, setLoading] = useState(true);

  const getRole = async () => {
    try {
      const data = await firestore()
        .collection('users')
        .doc(uid)
        .collection('subscriptions')
        .get();

      data.forEach(subscription => {
        setRole({
          id: subscription.id,
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
    getRole();
  }, [uid]);

  return { role, loading };
};
