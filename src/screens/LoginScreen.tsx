import React, { useContext } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../hooks/useForm';
import { appStyles } from '../theme/appTheme';
import { LoginRootStackNavigation } from '../navigation/LoginStackNavigation';
import { AuthContext } from '../context/auth/AuthContext';

interface Props
  extends StackScreenProps<LoginRootStackNavigation, 'LoginScreen'> {}

const LoginScreen = ({ navigation }: Props) => {
  const { form, onChange } = useForm({
    email: '',
    password: '',
  });

  const { email, password } = form;

  const { signIn } = useContext(AuthContext);

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
            placeholderTextColor="#ccc"
            style={styles.input}
            onChangeText={value => onChange(value, 'email')}
          />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry
            placeholderTextColor="#ccc"
            style={styles.input}
            onChangeText={value => onChange(value, 'password')}
          />

          <View style={styles.center}>
            <TouchableOpacity
              style={appStyles.btnPrimary}
              onPress={() => signIn(email, password)}>
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
          <TouchableOpacity>
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
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
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
