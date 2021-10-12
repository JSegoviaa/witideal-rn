import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import MyPropertiesScreen from '../screens/MyPropertiesScreen';
import MyDestPropertiesScreen from '../screens/MyDestPropertiesScreen';
import StackNavigation from './StackNavigation';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName: string = '';
          switch (route.name) {
            case 'HomeScreen':
              iconName = 'home-outline';
              break;

            case 'MyDestPropertiesScreen':
              iconName = 'star-outline';
              break;
            case 'MyPropertiesScreen':
              iconName = 'business-outline';
              break;

            case 'ProfileScreen':
              iconName = 'person-circle-outline';
              break;
          }

          return <Icon name={iconName} size={20} />;
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        options={{ title: 'Inicio', headerShown: false }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="MyDestPropertiesScreen"
        options={{ title: 'Mis destacados', headerShown: false }}
        component={RegisterScreen}
      />
      <Tab.Screen
        name="MyPropertiesScreen"
        options={{ title: 'Mis propiedades', headerShown: false }}
        component={LoginScreen}
      />
      <Tab.Screen
        name="ProfileScreen"
        options={{ title: 'Mi perfil', headerShown: false }}
        component={StackNavigation}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
