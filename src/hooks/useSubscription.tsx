import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from 'react';

export const useRole = (uid: string) => {
  const [subscription, setSubscription] = useState(null);

  const getSubscription = async () => {
    try {
      const data = await firestore()
        .collection('users')
        .doc(uid)
        .collection('subscription')
        .get();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubscription();
  }, []);

  //   useEffect(() => {
  //     firestore()
  //       .collection('users')
  //       .doc(uid)
  //       .collection('subscriptions')
  //       .get()
  //       .then(snapshot => {
  //         snapshot.forEach(subscription => {
  //           setSubscription({
  //             id: subscription.id,
  //             role: subscription.data().items[0].price.product.metadata
  //               .firebaseRole,
  //             current_period_start:
  //               subscription.data().current_period_start.seconds,

  //             current_period_end: subscription.data().current_period_end.seconds,
  //             price: subscription.data().items[0].price,
  //           });
  //         });
  //       });
  //   }, [db, uId]);

  return { subscription };
};
