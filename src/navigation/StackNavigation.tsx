import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MyFavoritesScreen from '../screens/MyFavoritesScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import ProfileScreen from '../screens/ProfileScreen';

export type RootStackNavigation = {
  Profile: undefined;
  Payments: undefined;
  MyFavorites: undefined;
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
    </Stack.Navigator>
  );
};

export default StackNavigation;
