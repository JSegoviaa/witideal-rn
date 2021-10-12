import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useForm } from '../hooks/useForm';
import { appStyles } from '../theme/appTheme';

const LoginScreen = () => {
  const { form, onChange } = useForm({
    email: '',
    password: '',
  });

  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <View style={appStyles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://i.imgur.com/nACtLME.png',
            }}
          />
        </View>

        <Text style={styles.title}>Inicia sesión para poder continuar</Text>
        <Text style={styles.textCenter}>
          Ingresa tu correo electrónico y contraseña
        </Text>
        <TextInput
          placeholder="Coreo electrónico"
          style={styles.input}
          onChangeText={value => onChange(value, 'email')}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          style={styles.input}
          onChangeText={value => onChange(value, 'password')}
        />

        <View style={styles.center}>
          <TouchableOpacity style={appStyles.btnPrimary}>
            <Text style={appStyles.textCenter}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.center}></Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('MyDestPropertiesScreen')}>
          <Text style={styles.textCenter}>
            No tengo cuenta, quiero registrarme
          </Text>
        </TouchableOpacity>
        <Text style={styles.center}></Text>
        <Text style={styles.center}></Text>
        <View
          style={{ borderBottomWidth: 1, borderBottomColor: '#000' }}></View>

        <Text style={styles.center}></Text>
        <TouchableOpacity>
          <View style={styles.center}>
            <Text style={styles.google}>
              <Icon name="logo-google" size={20} /> Inicia sesión con google
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
  },
  background: { backgroundColor: '#fff' },
  textCenter: {
    textAlign: 'center',
  },
  logo: {
    width: 204,
    height: 50,
  },
  logoContainer: { alignItems: 'center', paddingBottom: 20, paddingTop: 20 },
  title: {
    textAlign: 'center',
    fontSize: 25,
    color: '#1E0E9D',
    fontWeight: '700',
  },
  center: {
    alignItems: 'center',
  },
  google: {
    fontSize: 20,
    color: '#000',
  },
});

export default LoginScreen;
