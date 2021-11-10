import React, { createContext, FC, useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';

interface RegisterProp {
  name: string;
  lastname: string;
  mail: string;
  phone: string;
  password: string;
  isPromoter?: boolean;
  companyName?: string;
  promoterType?: string;
}

interface ContextProps {
  user: FirebaseAuthTypes.User | null;
  loading: Boolean;
  signIn: (email: string, password: string) => void;
  logOut: () => void;
  signInWithGoogle: () => void;
  register: (data: RegisterProp) => void;
}

GoogleSignin.configure({
  webClientId:
    '643219863964-3ne34usc5iikprcms6mtcgpu1l308tcf.apps.googleusercontent.com',
});

export const AuthContext = createContext({} as ContextProps);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    if (loading) setLoading(false);
  };

  useEffect(() => {
    const susbcriber = auth().onAuthStateChanged(onAuthStateChanged);
    return susbcriber;
  }, []);

  if (loading) return null;

  const signIn = async (email: string, password: string) => {
    try {
      if (email && password) {
        await auth().signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: 'Error al iniciar sesión',
        text2: 'Inténtelo nuevamente',
      });
    }
  };

  const logOut = async () => await auth().signOut();

  const signInWithGoogle = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (data: RegisterProp) => {
    const { name, lastname, mail, password } = data;

    if (mail && password && name && lastname) {
      const { user } = await auth().createUserWithEmailAndPassword(
        mail,
        password,
      );
      await user.updateProfile({ displayName: `${name} ${lastname}` });

      const currentUser: any = auth().currentUser;
      await firestore()
        .collection('production')
        .doc('Users')
        .collection(currentUser.uid)
        .doc('generalInfo')
        .set(data);
    }
  };

  return (
    <AuthContext.Provider
      value={{ signIn, loading, user, logOut, signInWithGoogle, register }}>
      {children}
    </AuthContext.Provider>
  );
};
