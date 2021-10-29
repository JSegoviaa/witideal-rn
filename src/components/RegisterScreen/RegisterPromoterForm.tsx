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
import { LoginRootStackNavigation } from '../../navigation/LoginStackNavigation';
import { useForm } from '../../hooks/useForm';
import { appStyles } from '../../theme/appTheme';
import { AuthContext } from '../../context/auth/AuthContext';
import {
  independenBroker,
  inmobiliaria,
  owner,
} from '../../constant/promoterType';

interface Props
  extends StackScreenProps<LoginRootStackNavigation, 'RegisterScreen'> {}

const RegisterPromoterForm = ({ route }: Props) => {
  const { form, onChange } = useForm({
    name: '',
    lastname: '',
    phone: '',
    companyName: '',
    mail: '',
    correo2: '',
    password: '',
    password2: '',
    promoterType: route.params!.id,
    isPromoter: true,
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
    promoterType,
    isPromoter,
  } = form;

  const params = route.params;

  const { register } = useContext(AuthContext);

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
      promoterType,
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

        {params.id === independenBroker && (
          <TextInput
            placeholder={
              params.id === independenBroker ? 'Soy independiente' : ''
            }
            placeholderTextColor="#ccc"
            editable={false}
            style={styles.inputFalse}
            onChangeText={value => onChange(value, 'promoterType')}
          />
        )}

        {params.id === inmobiliaria && (
          <>
            <TextInput
              placeholder={params.id === inmobiliaria ? 'Inmobiliaria' : ''}
              placeholderTextColor="#ccc"
              editable={false}
              style={styles.inputFalse}
              onChangeText={value => onChange(value, 'promoterType')}
            />
            <TextInput
              placeholder="Nombre de la inmobiliaria"
              placeholderTextColor="#ccc"
              style={styles.input}
              onChangeText={value => onChange(value, 'companyName')}
            />
          </>
        )}

        {params.id === owner && (
          <TextInput
            placeholder={params.id === owner ? 'Dueño de propiedad' : ''}
            placeholderTextColor="#ccc"
            editable={false}
            style={styles.inputFalse}
            onChangeText={value => onChange(value, 'promoterType')}
          />
        )}

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
export default RegisterPromoterForm;
