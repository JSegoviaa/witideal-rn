import React, { useContext } from 'react';
import {
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

  const { correo, password, nombre } = form;
  const params = route.params;

  const { register } = useContext(AuthContext);

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
          style={styles.input}
          onChangeText={value => onChange(value, 'nombre')}
        />
        <TextInput
          placeholder="Apellido"
          style={styles.input}
          onChangeText={value => onChange(value, 'apellido')}
        />
        <TextInput
          placeholder="Teléfono"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'tel')}
        />

        {params?.id === 'promotor' && (
          <TextInput
            placeholder="Empresa"
            style={styles.input}
            onChangeText={value => onChange(value, 'empresa')}
          />
        )}
        <TextInput
          placeholder="Correo electrónico"
          keyboardType="email-address"
          style={styles.input}
          onChangeText={value => onChange(value, 'correo')}
        />
        <TextInput
          placeholder="Confirme su correo electrónico"
          keyboardType="email-address"
          style={styles.input}
          onChangeText={value => onChange(value, 'correo2')}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          style={styles.input}
          onChangeText={value => onChange(value, 'password')}
        />
        <TextInput
          placeholder="Confirme su contraseña"
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
            onPress={() => {
              register(correo, password, nombre);
            }}>
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
