import React, { useContext } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../context/auth/AuthContext';
import { useForm } from '../hooks/useForm';
import { useUserInfo } from '../hooks/useUserInfo';
import { appStyles } from '../theme/appTheme';

const EditProfileScreen = () => {
  const { user } = useContext(AuthContext);
  const { userInfo } = useUserInfo(user?.uid!);

  const { form, onChange } = useForm({
    name: '',
    lastname: '',
    mail: '',
    phone: '',
  });

  return (
    <View>
      {userInfo && (
        <TextInput
          placeholder={`${userInfo.name}`}
          placeholderTextColor="#000"
          style={styles.input}
          onChangeText={value => onChange(value, 'name')}
        />
      )}

      {userInfo && (
        <TextInput
          placeholder={`${userInfo.lastname}`}
          placeholderTextColor="#000"
          style={styles.input}
          onChangeText={value => onChange(value, 'lastname')}
        />
      )}
      {userInfo && (
        <TextInput
          placeholder={`${userInfo.mail}`}
          placeholderTextColor="#000"
          style={styles.input}
          onChangeText={value => onChange(value, 'mail')}
        />
      )}

      {userInfo && (
        <TextInput
          placeholder={`${userInfo.phone}`}
          keyboardType="numeric"
          placeholderTextColor="#000"
          style={styles.input}
          onChangeText={value => onChange(value, 'phone')}
        />
      )}

      <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <TouchableOpacity style={appStyles.btnPrimary}>
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
