import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import EditProfileScreen from '../screens/EditProfileScreen';
import MyFavoritesScreen from '../screens/MyFavoritesScreen';
import NoPScreen from '../screens/NoPScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ToSScreen from '../screens/ToSScreen';

export type RootStackNavigation = {
  Profile: undefined;
  Payments: undefined;
  MyFavorites: undefined;
  EditProfile: undefined;
  TosScreen: undefined;
  NoPScreen: undefined;
};

const Stack = createStackNavigator<RootStackNavigation>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'white' },
      }}>
      <Stack.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={ProfileScreen}
      />
      <Stack.Screen
        name="Payments"
        options={{ title: 'Mis pagos' }}
        component={PaymentsScreen}
      />
      <Stack.Screen
        name="MyFavorites"
        options={{ title: 'Mis favoritos' }}
        component={MyFavoritesScreen}
      />
      <Stack.Screen
        name="EditProfile"
        options={{ title: 'Editar perfil' }}
        component={EditProfileScreen}
      />
      <Stack.Screen
        name="TosScreen"
        options={{
          title: 'Términos y condiciones',
          headerTintColor: '#1E0E6F',
          headerTitleAlign: 'center',
        }}
        component={ToSScreen}
      />
      <Stack.Screen
        name="NoPScreen"
        options={{
          title: 'Aviso de privacidad',
          headerTintColor: '#1E0E6F',
          headerTitleAlign: 'center',
        }}
        component={NoPScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
