import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MyDestPropertiesScreen from '../screens/MyDestPropertiesScreen';
import SearchStackNavigation from './SearchStackNavigation';
import StackNavigation from './StackNavigation';
import LoginStackNavigation from './LoginStackNavigation';
import MyPropertiesScreen from '../screens/MyPropertiesScreen';

const Tab = createBottomTabNavigator();

// Componente que se muestra si no tengo sesión iniciada

const TabNoLogin = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName: string = '';
          switch (route.name) {
            case 'HomeScreenNavigation':
              iconName = 'home-outline';
              break;

            case 'LoginStackScreen':
              iconName = 'person-circle-outline';
              break;
          }

          return <Icon name={iconName} size={20} />;
        },
      })}>
      <Tab.Screen
        name="HomeScreenNavigation"
        options={{ title: 'Inicio', headerShown: false }}
        component={SearchStackNavigation}
      />

      <Tab.Screen
        name="LoginStackScreen"
        options={{ title: 'Mi Perfil', headerShown: false }}
        component={LoginStackNavigation}
      />
    </Tab.Navigator>
  );
};

// Componente que se muestra si tengo sesión iniciada

const TabLogin = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName: string = '';
          switch (route.name) {
            case 'HomeScreenNavigation':
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
        name="HomeScreenNavigation"
        options={{ title: 'Inicio', headerShown: false }}
        component={SearchStackNavigation}
      />
      <Tab.Screen
        name="MyDestPropertiesScreen"
        options={{ title: 'Mis destacados', headerShown: false }}
        component={MyDestPropertiesScreen}
      />
      <Tab.Screen
        name="MyPropertiesScreen"
        options={{ title: 'Mis propiedades', headerShown: false }}
        component={MyPropertiesScreen}
      />
      <Tab.Screen
        name="ProfileScreen"
        options={{ title: 'Mi perfil', headerShown: false }}
        component={StackNavigation}
      />
    </Tab.Navigator>
  );
};

const TabsNavigation = () => {
  const [mostrar, setMostrar] = useState(false);

  return <>{mostrar ? <TabLogin /> : <TabNoLogin />}</>;
};

export default TabsNavigation;
