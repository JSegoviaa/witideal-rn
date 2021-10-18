import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import PersonalInfo from '../components/ProfileScreen/PersonalInfo';
import { RootStackNavigation } from '../navigation/StackNavigation';
import { appStyles } from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackNavigation, 'Profile'> {}

const ProfileScreen = ({ navigation }: Props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <PersonalInfo />
          <View style={styles.container2}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Payments');
              }}>
              <Text style={appStyles.btnSecondary}>Mis pagos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MyFavorites');
              }}>
              <Text style={appStyles.btnSecondary}>Mis favoritos</Text>
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
