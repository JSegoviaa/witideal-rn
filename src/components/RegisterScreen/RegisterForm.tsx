import React, { useContext, useState } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { useForm } from '../../hooks/useForm';
import { appStyles } from '../../theme/appTheme';
import { AuthContext } from '../../context/auth/AuthContext';
import { RootLoginStackNavigation } from '../../navigation/LoginStackNavigation';

interface Props
  extends StackScreenProps<RootLoginStackNavigation, 'RegisterPromoterForm'> {}

const RegisterForm = ({ navigation }: Props) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const { form, onChange } = useForm({
    name: '',
    lastname: '',
    phone: '',
    companyName: '',
    mail: '',
    correo2: '',
    password: '',
    password2: '',
    isPromoter: false,
  });

  const {
    mail,
    correo2,
    password,
    password2,
    name,
    lastname,
    companyName,
    phone,
    isPromoter,
  } = form;

  const { register } = useContext(AuthContext);

  const handleVisiblePassword = () => setPasswordVisible(!passwordVisible);

  const handleRegister = () => {
    if (!name.trim()) {
      Alert.alert('', 'El nombre es obligatorio', [{ text: 'Regresar' }]);
    }
    if (!lastname.trim()) {
      Alert.alert('', 'El apellido es obligatorio', [{ text: 'Regresar' }]);
    }
    if (!mail.trim()) {
      Alert.alert('', 'El correo electrónico es obligatorio', [
        { text: 'Regresar' },
      ]);
    }
    if (!correo2.trim()) {
      Alert.alert('', 'Confirme su correo electrónico', [{ text: 'Regresar' }]);
    }
    if (!password.trim()) {
      Alert.alert('', 'La contraseña es obligatoria', [{ text: 'Regresar' }]);
    }
    if (!password2.trim()) {
      Alert.alert('', 'Confirme la contraseña', [{ text: 'Regresar' }]);
    }

    if (mail !== correo2) {
      Alert.alert('', 'El correo electrónico ingresado no coincide', [
        { text: 'Regresar' },
      ]);
    }

    if (password !== password2) {
      Alert.alert('', 'Las contraseñas no coinciden', [{ text: 'Regresar' }]);
    }

    const data = {
      name,
      lastname,
      mail,
      phone,
      password,
      companyName,
      isPromoter,
    };
    if (mail === correo2 && password === password2) {
      register(data);
    }
    return;
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={appStyles.logoContainer}>
          <Image
            style={appStyles.logo}
            source={require('../../assets/logo-brand.png')}
          />
        </View>
        <Text style={styles.title}>Ingrese los siguientes datos</Text>
        <TextInput
          placeholder="Nombre"
          placeholderTextColor="#ccc"
          style={styles.input}
          onChangeText={value => onChange(value, 'name')}
        />
        <TextInput
          placeholder="Apellido"
          placeholderTextColor="#ccc"
          style={styles.input}
          onChangeText={value => onChange(value, 'lastname')}
        />
        <TextInput
          placeholder="Teléfono"
          placeholderTextColor="#ccc"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'phone')}
        />

        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          onChangeText={value => onChange(value, 'mail')}
        />
        <TextInput
          placeholder="Confirme su correo electrónico"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          onChangeText={value => onChange(value, 'correo2')}
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

        <View style={styles.passwordSection}>
          <TextInput
            placeholder="Confirma su contraseña"
            secureTextEntry={passwordVisible}
            placeholderTextColor="#ccc"
            style={styles.passwordInput}
            onChangeText={value => onChange(value, 'password2')}
          />
        </View>

        <Text style={styles.info}>
          Al registrarse estás aceptando nuestros{' '}
          <Text
            style={styles.tos}
            onPress={() => {
              navigation.navigate('TosScreen');
            }}>
            términos y condiciones
          </Text>
        </Text>

        <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <TouchableOpacity
            style={appStyles.btnPrimary}
            onPress={handleRegister}>
            <Text
              style={{
                color: 'white',
                fontWeight: '700',
                textAlign: 'center',
              }}>
              Regístrate
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  info: {
    color: '#757575',
    fontSize: 13,
    fontWeight: '500',
    paddingHorizontal: 13,
    paddingVertical: 20,
  },
  input: {
    backgroundColor: '#f6f6f6',
    borderColor: '#41B8F9',
    borderRadius: 5,
    borderWidth: 1,
    color: '#000',
    height: 40,
    margin: 12,
    padding: 10,
  },
  inputFalse: {
    backgroundColor: '#f6f6f6',
    borderColor: '#41B8F9',
    borderRadius: 5,
    borderWidth: 1,
    color: '#ccc',
    height: 40,
    margin: 12,
    padding: 10,
  },
  passwordSection: {
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    borderColor: '#41B8F9',
    borderRadius: 5,
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
  title: {
    color: '#1E0E6F',
    fontSize: 20,
    fontWeight: '700',
    paddingVertical: 10,
    textAlign: 'center',
  },
  tos: {
    color: '#3F19F9',
  },
});
export default RegisterForm;
