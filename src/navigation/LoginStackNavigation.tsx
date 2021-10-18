import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import RegisterForm from '../components/RegisterScreen/RegisterForm';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

export type LoginStackNavigation = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  RegisterForm: undefined;
};

const Stack = createStackNavigator<LoginStackNavigation>();

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
    </Stack.Navigator>
  );
};

export default LoginStackNavigation;
