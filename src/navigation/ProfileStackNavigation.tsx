import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import EditProfileScreen from '../screens/EditProfileScreen';
import MyFavoritesScreen from '../screens/MyFavoritesScreen';
import NoPScreen from '../screens/NoPScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PropertyDetailScreen from '../screens/PropertyDetailScreen';
import ToSScreen from '../screens/ToSScreen';

export type RootProfileStackNavigation = {
  ProfileScreen: undefined;
  PaymentsScreen: undefined;
  MyFavoritesScreen: undefined;
  EditProfileScreen: undefined;
  TosScreen: undefined;
  NoPScreen: undefined;
  FavoriteDetailScreen:undefined
};

const Stack = createStackNavigator<RootProfileStackNavigation>();

const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'white' },
      }}>
      <Stack.Screen
        name="ProfileScreen"
        options={{ headerShown: false }}
        component={ProfileScreen}
      />
      <Stack.Screen
        name="PaymentsScreen"
        options={{ title: 'Mis pagos' }}
        component={PaymentsScreen}
      />
      <Stack.Screen
        name="MyFavoritesScreen"
        options={{ title: 'Mis favoritos' }}
        component={MyFavoritesScreen}
      />
      <Stack.Screen
        name="EditProfileScreen"
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
      <Stack.Screen
        name="FavoriteDetailScreen"
        options={{ headerShown: false }}
        component={PropertyDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigation;
