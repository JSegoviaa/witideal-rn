import React, { createContext, FC, useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Alert } from 'react-native';

interface ContextProps {
  user: FirebaseAuthTypes.User | null;
  loading: Boolean;
  signIn: (email: string, password: string) => void;
  logOut: () => void;
  signInWithGoogle: () => void;
  register: (
    email: string,
    password: string,
    name: string,
    apellido: string,
  ) => void;
}

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
      //  Alert.alert('', `${error}`, [{ text: 'Regresar' }]);
      Alert.alert('Error al iniciar sesión', `Inténtelo de nuevo`, [{ text: 'Regresar' }]);
    }
  };

  const logOut = async () => await auth().signOut();

  const signInWithGoogle = () => {
    console.log('Inicio de sesión con google');
  };

  const register = async (
    email: string,
    password: string,
    name: string,
    apellido: string,
  ) => {
    if (email && password && name && apellido) {
      const { user } = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      await user.updateProfile({ displayName: `${name} ${apellido}` });
    }
  };

  return (
    <AuthContext.Provider
      value={{ signIn, loading, user, logOut, signInWithGoogle, register }}>
      {children}
    </AuthContext.Provider>
  );
};
