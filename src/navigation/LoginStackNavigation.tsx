import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import RegisterForm from '../components/RegisterScreen/RegisterForm';
import RegisterPromoterForm from '../components/RegisterScreen/RegisterPromoterForm';
import LoginScreen from '../screens/LoginScreen';
import NoPScreen from '../screens/NoPScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ToSScreen from '../screens/ToSScreen';

export type RootLoginStackNavigation = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  RegisterForm: undefined;
  RegisterPromoterForm: { id: string | undefined };
  TosScreen: undefined;
  NoPScreen: undefined;
};

const Stack = createStackNavigator<RootLoginStackNavigation>();

const LoginStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'white' },
        headerStyle: { elevation: 0, shadowColor: 'transparent' },
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
          cardStyle: { height: '100%' },
        }}
        component={RegisterScreen}
      />
      <Stack.Screen
        name="RegisterForm"
        options={{ title: 'Registrarse' }}
        component={RegisterForm}
      />
      <Stack.Screen
        name="RegisterPromoterForm"
        options={{ title: 'Registrarse' }}
        component={RegisterPromoterForm}
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
          title: 'Términos y condiciones',
          headerTintColor: '#1E0E6F',
          headerTitleAlign: 'center',
        }}
        component={NoPScreen}
      />
    </Stack.Navigator>
  );
};

export default LoginStackNavigation;
