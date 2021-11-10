import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import PersonalInfo from '../components/ProfileScreen/PersonalInfo';
import { appStyles } from '../theme/appTheme';
import { RootProfileStackNavigation } from '../navigation/ProfileStackNavigation';

interface Props
  extends StackScreenProps<RootProfileStackNavigation, 'ProfileScreen'> {}

const ProfileScreen = ({ navigation }: Props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={appStyles.logoContainer}>
          <Image
            style={appStyles.logo}
            source={require('../assets/logo-brand.png')}
          />
        </View>
        <View>
          <PersonalInfo />
          <View style={styles.container2}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PaymentsScreen');
              }}>
              <Text style={appStyles.btnSecondary}>Mis pagos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MyFavoritesScreen');
              }}>
              <Text style={appStyles.btnSecondary}>Mis favoritos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TosScreen');
              }}>
              <Text style={{ color: '#757575', paddingVertical: 10 }}>
                Términos y condiciones
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('NoPScreen');
              }}>
              <Text style={{ color: '#757575', paddingVertical: 10 }}>
                Aviso de privacidad
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '98%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    borderRadius: 10,
  },
  container2: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: 15,
    paddingTop: 15,
  },
});

export default ProfileScreen;
