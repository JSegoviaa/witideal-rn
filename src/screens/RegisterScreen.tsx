import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { LoginRootStackNavigation } from '../navigation/LoginStackNavigation';
import { appStyles } from '../theme/appTheme';

interface Props
  extends StackScreenProps<LoginRootStackNavigation, 'RegisterScreen'> {}

const RegisterScreen = ({ navigation }: Props) => {
  return (
    <ScrollView>
      <View style={styles.background}>
        <View style={appStyles.container}>
          <View style={appStyles.logoContainer}>
            <Image
              style={appStyles.logo}
              source={require('../assets/logo-brand.png')}
            />
          </View>
          <Text style={styles.title}>Empecemos con tu cuenta</Text>

          <View style={styles.card}>
            <Icon style={styles.iconColor} name="search-outline" size={45} />
            <Text style={styles.subtitle}>
              Crea una cuenta para buscar propiedades
            </Text>
            <TouchableOpacity
              style={appStyles.btnRegister}
              onPress={() => {
                navigation.navigate('RegisterForm', { id: 'buscador' });
              }}>
              <Text style={{ color: '#41B8F9', textAlign: 'center' }}>
                Buscador
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Icon style={styles.iconColor} name="megaphone-outline" size={45} />
            <Text style={styles.subtitle}>
              Crea una cuenta para anunciar propiedades
            </Text>

            <TouchableOpacity
              style={appStyles.btnRegister}
              onPress={() => {
                navigation.navigate('RegisterForm', { id: 'promotor' });
              }}>
              <Text style={{ color: '#41B8F9', textAlign: 'center' }}>
                Promotor
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: { backgroundColor: '#f5f5f5', flex: 1 },
  card: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 2,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#1E0E6F',
    fontWeight: '700',
    padding: 10,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#1e0e6f',
    fontWeight: '600',
    padding: 5,
  },
  iconColor: {
    color: '#3F19F9',
    padding: 5,
  },
});

export default RegisterScreen;
