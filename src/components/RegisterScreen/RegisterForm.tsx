import React, { useContext } from 'react';
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
import { useForm } from '../../hooks/useForm';
import { LoginRootStackNavigation } from '../../navigation/LoginStackNavigation';
import { appStyles } from '../../theme/appTheme';
import { AuthContext } from '../../context/auth/AuthContext';

interface Props
  extends StackScreenProps<LoginRootStackNavigation, 'RegisterScreen'> {}

const RegisterForm = ({ route }: Props) => {
  const { form, onChange } = useForm({
    nombre: '',
    apellido: '',
    tel: '',
    empresa: '',
    correo: '',
    correo2: '',
    password: '',
    password2: '',
  });

  const { correo, correo2, password, password2, nombre, apellido } = form;
  const params = route.params;

  const { register } = useContext(AuthContext);

  const handleRegister = () => {
    if (!nombre.trim()) {
      Alert.alert('', 'El nombre es obligatorio', [{ text: 'Regresar' }]);
    }
    if (!apellido.trim()) {
      Alert.alert('', 'El apellido es obligatorio', [{ text: 'Regresar' }]);
    }
    if (!correo.trim()) {
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

    if (correo !== correo2) {
      Alert.alert('', 'El correo electrónico ingresado no coincide', [
        { text: 'Regresar' },
      ]);
    }

    if (password !== password2) {
      Alert.alert('', 'Las contraseñas no coinciden', [{ text: 'Regresar' }]);
    }

    if (correo === correo2 && password === password2) {
      register(correo, password, nombre, apellido);
    }
    return
     
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
          onChangeText={value => onChange(value, 'nombre')}
        />
        <TextInput
          placeholder="Apellido"
          placeholderTextColor="#ccc"
          style={styles.input}
          onChangeText={value => onChange(value, 'apellido')}
        />
        <TextInput
          placeholder="Teléfono"
          placeholderTextColor="#ccc"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'tel')}
        />

        {params?.id === 'promotor' && (
          <TextInput
            placeholder="Empresa"
            placeholderTextColor="#ccc"
            style={styles.input}
            onChangeText={value => onChange(value, 'empresa')}
          />
        )}
        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          onChangeText={value => onChange(value, 'correo')}
        />
        <TextInput
          placeholder="Confirme su correo electrónico"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          onChangeText={value => onChange(value, 'correo2')}
        />
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#ccc"
          secureTextEntry
          style={styles.input}
          onChangeText={value => onChange(value, 'password')}
        />
        <TextInput
          placeholder="Confirme su contraseña"
          placeholderTextColor="#ccc"
          secureTextEntry
          style={styles.input}
          onChangeText={value => onChange(value, 'password2')}
        />
        <Text style={styles.info}>
          Al registrarse estás aceptando nuestros{' '}
          <Text style={styles.tos}>términos y condiciones</Text>
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
    fontSize: 13,
    fontWeight: '500',
    paddingHorizontal: 13,
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
