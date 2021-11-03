import React, { useContext, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../hooks/useForm';
import { appStyles } from '../theme/appTheme';
import { RootLoginStackNavigation } from '../navigation/LoginStackNavigation';
import { AuthContext } from '../context/auth/AuthContext';

interface Props
  extends StackScreenProps<RootLoginStackNavigation, 'LoginScreen'> {}

const LoginScreen = ({ navigation }: Props) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const { form, onChange } = useForm({
    email: '',
    password: '',
  });

  const { email, password } = form;

  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = () => {
    if (!email.trim()) {
      Alert.alert('', 'Correo electrónico obligatorio');
    }
    if (!password.trim()) {
      Alert.alert('', 'Contraseña obligatoria');
    }

    signIn(email, password);
  };

  const handleVisiblePassword = () => setPasswordVisible(!passwordVisible);

  return (
    <View style={styles.background}>
      <ScrollView>
        <View style={appStyles.container}>
          <View style={appStyles.logoContainer}>
            <Image
              style={appStyles.logo}
              source={require('../assets/logo-brand.png')}
            />
          </View>

          <Text style={styles.title}>Inicia sesión para poder continuar</Text>
          <Text style={styles.textCenter}>
            Ingresa tu correo electrónico y contraseña
          </Text>
          <TextInput
            placeholder="Coreo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#ccc"
            style={styles.input}
            onChangeText={value => onChange(value, 'email')}
          />
          <View style={styles.passwordSection}>
            <TextInput
              placeholder="Contraseña"
              secureTextEntry={passwordVisible}
              placeholderTextColor="#ccc"
              style={styles.passwordInput}
              onChangeText={value => onChange(value, 'password')}
            />
            {passwordVisible ? (
              <Icon
                name="eye-outline"
                size={22}
                color="#000"
                onPress={handleVisiblePassword}
                style={styles.passwordIcon}
              />
            ) : (
              <Icon
                name="eye-off-outline"
                size={22}
                color="#000"
                onPress={handleVisiblePassword}
                style={styles.passwordIcon}
              />
            )}
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={appStyles.btnPrimary}
              onPress={handleLogin}>
              <Text style={appStyles.textCenter}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.center}></Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.textCenter}>
              No tengo cuenta, quiero registrarme
            </Text>
          </TouchableOpacity>
          <Text style={styles.center}></Text>
          <Text style={styles.center}></Text>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: '#000' }}></View>

          <Text style={styles.center}></Text>
          <TouchableOpacity onPress={() => signInWithGoogle()}>
            <View style={styles.center}>
              <Text style={styles.google}>
                <Icon name="logo-google" size={20} /> Inicia sesión con google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: { backgroundColor: '#fff', flex: 1 },
  center: { alignItems: 'center' },
  google: { fontSize: 20, color: '#000', padding: 15 },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    flex: 1,
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
    color: '#000',
  },
  passwordSection: {
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    borderRadius: 50,
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    margin: 12,
  },
  passwordIcon: { paddingHorizontal: 10 },
  passwordInput: {
    height: 40,
    margin: 12,
    flex: 1,
    padding: 10,
    borderRadius: 50,
    color: '#000',
  },
  textCenter: { textAlign: 'center', color: '#000' },
  title: {
    textAlign: 'center',
    fontSize: 25,
    color: '#1E0E9D',
    fontWeight: '700',
  },
});

export default LoginScreen;
