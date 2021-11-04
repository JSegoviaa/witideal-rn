import firestore from '@react-native-firebase/firestore';

interface DocumentData {
  [key: string]: any;
}

export const useMyPaginatedProperties = (uid: string) => {
  const postsFirstBatch = async () => {
    try {
      const data = await firestore()
        .collection('production')
        .doc('Users')
        .collection(uid)
        .doc('properties')
        .collection('ownedProperties')
        .orderBy('uploadDate', 'desc')
        .limit(6)
        .get();

      const posts: DocumentData = [];
      let lastKey: string = '';

      data.forEach(doc => {
        posts.push({
          id: doc.id,
          data: doc.data(),
        });
        lastKey = doc.data().desc;
      });

      return { posts, lastKey };
    } catch (error) {
      console.log(error);
    }
  };

  const postNextBatch = async (key: number) => {
    try {
      const data = await firestore()
        .collection('production')
        .doc('Users')
        .collection(uid)
        .doc('properties')
        .collection('ownedProperties')
        .orderBy('desc')
        .startAfter(key)
        .limit(6)
        .get();

      const posts: DocumentData = [];
      let lastKey: string = '';

      data.forEach(doc => {
        posts.push({
          id: doc.id,
          data: doc.data(),
        });
        lastKey = doc.data().desc;
      });

      return { posts, lastKey };
    } catch (error) {
      console.log(error);
    }
  };

  return { postsFirstBatch, postNextBatch };
};

export default useMyPaginatedProperties;
