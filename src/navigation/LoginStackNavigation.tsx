import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import RegisterForm from '../components/RegisterScreen/RegisterForm';
import LoginScreen from '../screens/LoginScreen';
import MyFavoritesScreen from '../screens/MyFavoritesScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import RegisterScreen from '../screens/RegisterScreen';

export type LoginStackNavigation = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  MyFavorites: undefined;
};

const Stack = createStackNavigator<LoginStackNavigation>();

const LoginStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'white' },
      }}>
      <Stack.Screen
        name="LoginScreen"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="RegisterScreen"
        options={{
          title: 'Registrarse',
          headerShown: false,
          cardStyle: { height: '100%' },
        }}
        component={RegisterScreen}
      />
      <Stack.Screen
        name="MyFavorites"
        options={{ title: 'Mis favoritos' }}
        component={MyFavoritesScreen}
      />
    </Stack.Navigator>
  );
};

export default LoginStackNavigation;
