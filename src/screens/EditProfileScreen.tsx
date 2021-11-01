import React, { useContext } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/auth/AuthContext';
import { useForm } from '../hooks/useForm';
import { useUserInfo } from '../hooks/useUserInfo';
import { appStyles } from '../theme/appTheme';
import { RootProfileStackNavigation } from '../navigation/ProfileStackNavigation';

interface Props
  extends StackScreenProps<RootProfileStackNavigation, 'EditProfileScreen'> {}

const EditProfileScreen = ({ navigation }: Props) => {
  const { user } = useContext(AuthContext);
  const { userInfo } = useUserInfo(user?.uid!);

  const { form, onChange } = useForm({
    name: '',
    lastname: '',
    phone: '',
  });

  const { name, lastname, phone } = form;
  const data = { name, lastname, phone };

  const handleEditProfile = async () => {
    if (!name.trim()) {
      Alert.alert('', 'El nombre es obligatorio', [{ text: 'Regresar' }]);
    }
    if (!lastname.trim()) {
      Alert.alert('', 'El apellido es obligatorio', [{ text: 'Regresar' }]);
    }
    if (!phone.trim()) {
      Alert.alert('', 'El número teléfono es obligatorio', [
        { text: 'Regresar' },
      ]);
    }

    if (name.length > 0 && lastname.length > 0 && phone.length > 0) {
      await firestore()
        .collection('production')
        .doc('Users')
        .collection(user?.uid!)
        .doc('generalInfo')
        .update(data);

      navigation.push('ProfileScreen');
    }
  };

  return (
    <View>
      {userInfo && (
        <TextInput
          placeholder="Escriba su nombre"
          placeholderTextColor="#000"
          style={styles.input}
          onChangeText={value => onChange(value, 'name')}
        />
      )}

      {userInfo && (
        <TextInput
          placeholder={`Escriba su apellido`}
          placeholderTextColor="#000"
          style={styles.input}
          onChangeText={value => onChange(value, 'lastname')}
        />
      )}

      {userInfo && (
        <TextInput
          placeholder={`Escriba su número de teléfono`}
          keyboardType="numeric"
          placeholderTextColor="#000"
          style={styles.input}
          onChangeText={value => onChange(value, 'phone')}
        />
      )}

      <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <TouchableOpacity
          style={appStyles.btnPrimary}
          onPress={handleEditProfile}>
          <Text style={appStyles.textCenter}>Actualizar información</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default EditProfileScreen;
