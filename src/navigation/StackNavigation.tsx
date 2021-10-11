import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MyFavoritesScreen from '../screens/MyFavoritesScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: 'white' } }}>
      <Stack.Screen
        name="Profile"
        options={{ title: '' }}
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
